import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  REQUEST_LOCALE_HEADER,
  isLocale,
  normalizeLocale,
  type Locale,
} from "@/lib/i18n/config";
import { detectPathLocale } from "@/lib/i18n/routing";

function withLocaleHeader(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REQUEST_LOCALE_HEADER, locale);
  return requestHeaders;
}

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    /\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  const localeFromPath = detectPathLocale(pathname);
  if (localeFromPath) {
    const response = NextResponse.next({
      request: {
        headers: withLocaleHeader(request, localeFromPath),
      },
    });

    response.cookies.set(LOCALE_COOKIE_NAME, localeFromPath, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });

    return response;
  }

  const localeCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const localeFromCookie = isLocale(localeCookie) ? localeCookie : null;
  const acceptLanguage = request.headers.get("accept-language");
  const localeFromHeader = normalizeLocale(acceptLanguage);
  const preferredLocale = localeFromCookie ?? localeFromHeader;

  if (preferredLocale !== DEFAULT_LOCALE) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/nl${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(LOCALE_COOKIE_NAME, "nl", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next({
    request: {
      headers: withLocaleHeader(request, DEFAULT_LOCALE),
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};
