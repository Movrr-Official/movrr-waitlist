"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/i18n/config";
import {
  detectPathLocale,
  stripLocalePrefix,
  withLocalePath,
} from "@/lib/i18n/routing";

interface LanguageSwitcherProps {
  labels: {
    ariaLabel: string;
    englishLabel: string;
    dutchLabel: string;
    englishName: string;
    dutchName: string;
  };
}

export function LanguageSwitcher({ labels }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = useMemo<Locale>(() => {
    const locale = detectPathLocale(pathname);
    return locale ?? "en";
  }, [pathname]);

  const switchLanguage = (locale: Locale) => {
    if (locale === currentLocale) {
      return;
    }

    const basePath = stripLocalePrefix(pathname);
    const targetPath = withLocalePath(locale, basePath);
    const query = searchParams.toString();
    const target = query ? `${targetPath}?${query}` : targetPath;

    document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
    window.localStorage.setItem(LOCALE_COOKIE_NAME, locale);
    router.push(target);
  };

  return (
    <div
      className="inline-flex items-center gap-0.5"
      aria-label={labels.ariaLabel}
    >
      <button
        type="button"
        aria-label={`${labels.ariaLabel}: ${labels.englishName}`}
        aria-pressed={currentLocale === "en"}
        className={`px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
          currentLocale === "en"
            ? "text-movrr-text-inverse"
            : "text-movrr-text-inverse/30 hover:text-movrr-text-inverse/55"
        }`}
        onClick={() => switchLanguage("en")}
      >
        {labels.englishLabel}
      </button>
      <span className="text-[0.65rem] text-movrr-text-inverse/20">/</span>
      <button
        type="button"
        aria-label={`${labels.ariaLabel}: ${labels.dutchName}`}
        aria-pressed={currentLocale === "nl"}
        className={`px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
          currentLocale === "nl"
            ? "text-movrr-text-inverse"
            : "text-movrr-text-inverse/30 hover:text-movrr-text-inverse/55"
        }`}
        onClick={() => switchLanguage("nl")}
      >
        {labels.dutchLabel}
      </button>
    </div>
  );
}
