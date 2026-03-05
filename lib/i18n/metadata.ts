import type { Metadata } from "next";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

type MetadataPageKey = keyof Dictionary["metadata"]["pages"];

function buildAlternates(locale: Locale, pathname: string) {
  return {
    canonical: withLocalePath(locale, pathname),
    languages: {
      en: withLocalePath("en", pathname),
      nl: withLocalePath("nl", pathname),
    },
  };
}

export function buildPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
  pageKey: MetadataPageKey,
  pathname: string
): Metadata {
  const pageMeta = dictionary.metadata.pages[pageKey];
  const localeTag = locale === "nl" ? "nl_NL" : "en_US";

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: dictionary.metadata.keywords,
    openGraph: {
      type: "website",
      title: pageMeta.title,
      description: pageMeta.description,
      locale: localeTag,
      siteName: dictionary.metadata.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
    },
    alternates: buildAlternates(locale, pathname),
  };
}
