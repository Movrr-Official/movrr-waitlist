import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo/site";

const publicCrawlerRules: MetadataRoute.Robots["rules"] = [
  {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/unauthorized", "/nl/unauthorized"],
  },
  ...[
    "Googlebot",
    "Bingbot",
    "DuckDuckBot",
    "OAI-SearchBot",
    "OAI-AdsBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "Claude-SearchBot",
    "Claude-User",
  ].map((userAgent) => ({
    userAgent,
    allow: "/",
    disallow: ["/api/", "/unauthorized", "/nl/unauthorized"],
  })),
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: publicCrawlerRules,
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
