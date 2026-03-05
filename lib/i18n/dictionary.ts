import { en, type Dictionary } from "@/locales/en";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "nl") {
    const { nl } = await import("@/locales/nl/common");
    return nl;
  }

  return en;
}

export async function getDictionaryByLocale(
  locale: string | null | undefined
): Promise<Dictionary> {
  if (locale === "nl") {
    return getDictionary("nl");
  }

  return getDictionary(DEFAULT_LOCALE);
}
