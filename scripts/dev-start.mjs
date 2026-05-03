import { spawn } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const lockPath = path.join(projectRoot, ".dev-lock.json");
const nextPort = process.env.PORT ? Number(process.env.PORT) : 3000;
const nextHost = process.env.NEXT_HOST ?? "localhost";

function isProcessAlive(pid) {
  if (!pid || !Number.isFinite(pid)) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function isPortInUse(port, host) {
  return await new Promise((resolve) => {
    const socket = net
      .createConnection({ port, host }, () => {
        socket.end();
        resolve(true);
      })
      .on("error", () => resolve(false));
  });
}

function acquireLock() {
  if (fs.existsSync(lockPath)) {
    try {
      const raw = fs.readFileSync(lockPath, "utf8");
      const parsed = JSON.parse(raw);
      if (parsed && isProcessAlive(parsed.pid)) {
        console.error(
          `Dev server already running (PID ${parsed.pid}). Stop it before starting again.`
        );
        process.exit(1);
      }
    } catch {
      // If lock file is stale/corrupt, ignore and overwrite below.
    }
  }

  fs.writeFileSync(lockPath, JSON.stringify({ pid: process.pid }), "utf8");
}

function releaseLock() {
  try {
    if (fs.existsSync(lockPath)) fs.unlinkSync(lockPath);
  } catch {
    // ignore
  }
}

async function main() {
  const portInUse = await isPortInUse(nextPort, nextHost);
  if (portInUse) {
    // Fail fast: this prevents the "two dev servers on different ports" state
    // that corrupts manifests and triggers runtime errors.
    console.error(
      `Port ${nextPort} on host ${nextHost} is already in use. Stop the existing dev server and retry.`
    );
    process.exit(1);
  }

  acquireLock();
  process.on("exit", releaseLock);
  process.on("SIGINT", () => {
    releaseLock();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    releaseLock();
    process.exit(143);
  });

  // Always start from a clean manifest state.
  // This avoids the recurring "missing required error components" / manifest corruption.
  try {
    fs.rmSync(path.join(projectRoot, ".next"), { recursive: true, force: true });
  } catch {
    // ignore
  }

  const env = {
    ...process.env,
    WATCHPACK_POLLING: "true",
    WATCHPACK_WATCHER_LIMIT: "20",
  };

  const child = spawn(
    "npx",
    ["next", "dev", "-p", String(nextPort), "--hostname", String(nextHost)],
    {
      cwd: projectRoot,
      env,
      stdio: "inherit",
    }
  );

  child.on("exit", (code) => {
    releaseLock();
    process.exit(code ?? 0);
  });

  // Give the server a moment to create initial manifests.
  await wait(200);
}

main().catch((err) => {
  console.error(err);
  releaseLock();
  process.exit(1);
});

