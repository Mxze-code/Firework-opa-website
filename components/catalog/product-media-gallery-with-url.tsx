"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductMediaGallery } from "@/components/catalog/product-media-gallery";

type Props = {
  image: string | null;
  imageAlt: string;
  videoUrl?: string;
};

function ProductMediaGalleryInner({ image, imageAlt, videoUrl }: Props) {
  const sp = useSearchParams();
  const v = sp.get("video");
  const initialShowVideo =
    v === "1" || v === "true" || v === "yes";

  return (
    <ProductMediaGallery
      image={image}
      imageAlt={imageAlt}
      videoUrl={videoUrl}
      initialShowVideo={initialShowVideo}
    />
  );
}

/** Liest ?video=1 für statischen Export (kein searchParams auf dem Server). */
export function ProductMediaGalleryWithUrl(props: Props) {
  return (
    <Suspense
      fallback={
        <ProductMediaGallery
          image={props.image}
          imageAlt={props.imageAlt}
          videoUrl={props.videoUrl}
          initialShowVideo={false}
        />
      }
    >
      <ProductMediaGalleryInner {...props} />
    </Suspense>
  );
}
