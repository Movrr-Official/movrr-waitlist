import { PAGE_PATHS, type PageKey } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";

export const SITE_URL = "https://movrr.nl";
export const SITE_NAME = "MOVRR";
export const LEGAL_NAME = "MOVRR B.V.";
export const DEFAULT_SOCIAL_IMAGE = "/opengraph-image";
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "MOVRR — everyday rides, rewarded. Early access waitlist.";

export interface SeoRouteConfig {
  indexable: boolean;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  image?: string;
  schemaType?: "FAQPage" | "WebPage";
}

export const SEO_ROUTES: Record<PageKey, SeoRouteConfig> = {
  home: {
    indexable: true,
    changeFrequency: "weekly",
    priority: 1,
    image: "/opengraph-image",
    schemaType: "FAQPage",
  },
  privacy: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.3,
    image: "/opengraph-image",
    schemaType: "WebPage",
  },
  terms: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.3,
    image: "/opengraph-image",
    schemaType: "WebPage",
  },
  accountDeletion: {
    indexable: true,
    changeFrequency: "yearly",
    priority: 0.5,
    image: "/opengraph-image",
    schemaType: "WebPage",
  },
  unauthorized: {
    indexable: false,
    changeFrequency: "yearly",
    priority: 0.1,
    schemaType: "WebPage",
  },
};

export const SITE_LAST_MODIFIED =
  process.env.SITE_LAST_MODIFIED ?? "2026-07-28";

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function localizedUrl(locale: Locale, pathname: string): string {
  const url = absoluteUrl(withLocalePath(locale, pathname));
  return url === `${SITE_URL}/` ? SITE_URL : url;
}

export function getPageKeyFromPathname(pathname: string): PageKey | null {
  const normalized = stripLocalePrefix(pathname).replace(/\/+$/, "") || "/";
  const match = (Object.entries(PAGE_PATHS) as Array<[PageKey, string]>).find(
    ([, pagePath]) => pagePath === normalized,
  );
  return match?.[0] ?? null;
}
