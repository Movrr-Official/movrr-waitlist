import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

export function detectPathLocale(pathname: string): Locale | null {
  if (pathname === "/nl" || pathname.startsWith("/nl/")) {
    return "nl";
  }

  return null;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/nl") {
    return "/";
  }

  if (pathname.startsWith("/nl/")) {
    const stripped = pathname.slice(3);
    return stripped || "/";
  }

  return pathname || "/";
}

export function withLocalePath(locale: Locale, pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === DEFAULT_LOCALE) {
    return normalizedPath === "/index" ? "/" : normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/nl";
  }

  return `/nl${normalizedPath}`;
}
