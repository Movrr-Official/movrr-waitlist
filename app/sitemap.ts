import type { MetadataRoute } from "next";
import { PAGE_PATHS, type PageKey } from "@/locales/types";
import {
  SEO_ROUTES,
  SITE_LAST_MODIFIED,
  absoluteUrl,
  localizedUrl,
} from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.entries(PAGE_PATHS) as Array<[PageKey, string]>).flatMap(
    ([key, pathname]) => {
      const route = SEO_ROUTES[key];
      if (!route.indexable) return [];

      const alternates = {
        languages: {
          en: localizedUrl("en", pathname),
          nl: localizedUrl("nl", pathname),
          "x-default": localizedUrl("en", pathname),
        },
      };
      const base = {
        lastModified: new Date(SITE_LAST_MODIFIED),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
        ...(route.image ? { images: [absoluteUrl(route.image)] } : {}),
      };
      return [
        { ...base, url: localizedUrl("en", pathname) },
        { ...base, url: localizedUrl("nl", pathname) },
      ];
    },
  );
}
