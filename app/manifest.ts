import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MOVRR — Everyday rides, rewarded.",
    short_name: "MOVRR",
    description:
      "Join MOVRR early access. Ride your existing routes and earn per verified kilometre.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#071f18",
    theme_color: "#071f18",
    categories: ["lifestyle", "fitness", "travel"],
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
