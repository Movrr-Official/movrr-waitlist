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
    <div className="fixed top-4 right-4 z-50">
      <div className="inline-flex items-center rounded-full border border-white/20 bg-black/55 p-1 shadow-2xl backdrop-blur-md">
        <button
          type="button"
          aria-label={`${labels.ariaLabel}: ${labels.englishName}`}
          aria-pressed={currentLocale === "en"}
          className={`min-w-11 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
            currentLocale === "en"
              ? "bg-primary text-primary-foreground"
              : "text-white/80 hover:text-white"
          }`}
          onClick={() => switchLanguage("en")}
        >
          {labels.englishLabel}
        </button>
        <button
          type="button"
          aria-label={`${labels.ariaLabel}: ${labels.dutchName}`}
          aria-pressed={currentLocale === "nl"}
          className={`min-w-11 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
            currentLocale === "nl"
              ? "bg-primary text-primary-foreground"
              : "text-white/80 hover:text-white"
          }`}
          onClick={() => switchLanguage("nl")}
        >
          {labels.dutchLabel}
        </button>
      </div>
    </div>
  );
}
