"use client";

import { useEffect } from "react";
import { CartProvider } from "@/lib/cart-context";

const CHUNK_RELOAD_KEY = "chunk-reload-time";

function isChunkLoadError(err: unknown): boolean {
  if (err instanceof Error) {
    return err.name === "ChunkLoadError" || err.message?.includes("Loading chunk") === true;
  }
  return false;
}

function tryChunkLoadRecovery() {
  const last = sessionStorage.getItem(CHUNK_RELOAD_KEY);
  const now = Date.now();
  if (!last || now - parseInt(last, 10) > 5000) {
    sessionStorage.setItem(CHUNK_RELOAD_KEY, String(now));
    window.location.reload();
  }
}

/**
 * Verhindert [object Event] in DevTools bei nativen Event-Rejections.
 * Behandelt ChunkLoadError mit automatischem Reload.
 */
function useUnhandledRejectionHandler() {
  useEffect(() => {
    const handler = (e: PromiseRejectionEvent) => {
      const reason = e.reason;
      if (
        reason instanceof Event ||
        (typeof reason === "object" &&
          reason !== null &&
          "type" in reason &&
          typeof (reason as Event).type === "string")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (isChunkLoadError(reason)) {
        e.preventDefault();
        tryChunkLoadRecovery();
      }
    };
    window.addEventListener("unhandledrejection", handler, true);
    return () => window.removeEventListener("unhandledrejection", handler, true);
  }, []);
}

/**
 * Fängt ChunkLoadError aus window.onerror (z.B. bei dynamischem Chunk-Load).
 */
function useChunkLoadErrorRecovery() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      const err = event.error ?? event;
      if (isChunkLoadError(err)) {
        tryChunkLoadRecovery();
      }
    };
    window.addEventListener("error", handler);
    return () => window.removeEventListener("error", handler);
  }, []);
}

/**
 * Einziger Client-Provider für Layout: Cart + Rejection-Handler + ChunkLoadError-Recovery.
 * Reduziert Client-Boundaries und stabilisiert HMR.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  useUnhandledRejectionHandler();
  useChunkLoadErrorRecovery();

  return <CartProvider>{children}</CartProvider>;
}
