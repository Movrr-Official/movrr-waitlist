import type { Metadata } from "next";
import type { Dictionary, PageKey } from "@/locales/types";
import { PAGE_PATHS } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SEO_ROUTES,
  SITE_NAME,
  localizedUrl,
} from "@/lib/seo/site";

export function buildPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
  pageKey: PageKey,
): Metadata {
  const page = dictionary.metadata.pages[pageKey];
  const pathname = PAGE_PATHS[pageKey];
  const canonical = localizedUrl(locale, pathname);
  const socialTitle = `${page.title} | ${SITE_NAME}`;
  const indexable = SEO_ROUTES[pageKey].indexable;

  return {
    title: page.title,
    description: page.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical,
      languages: {
        en: localizedUrl("en", pathname),
        nl: localizedUrl("nl", pathname),
        "x-default": localizedUrl("en", pathname),
      },
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        },
    openGraph: {
      type: "website",
      title: socialTitle,
      description: page.description,
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      alternateLocale: locale === "nl" ? ["en_GB"] : ["nl_NL"],
      siteName: dictionary.metadata.siteName,
      url: canonical,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: DEFAULT_SOCIAL_IMAGE_ALT,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          alt: DEFAULT_SOCIAL_IMAGE_ALT,
        },
      ],
    },
  };
}
