import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Merlin.law",
    short_name: "Merlin",
    description: "Medical record intelligence for defense counsel.",
    start_url: "/",
    display: "standalone",
    background_color: "#111113",
    theme_color: "#111113",
    icons: [
      { src: "/assets/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
