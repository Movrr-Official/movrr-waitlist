import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://movrr.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/nl`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/nl/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/nl/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
