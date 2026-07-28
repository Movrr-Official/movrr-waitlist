import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import {
  REQUEST_LOCALE_HEADER,
  REQUEST_PATHNAME_HEADER,
  normalizeLocale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildStructuredData } from "@/lib/seo/structured-data";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: "MOVRR B.V.",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  title: {
    template: `%s | ${SITE_NAME}`,
    default: "MOVRR — Everyday rides, rewarded.",
  },
  description:
    "Join MOVRR early access. Ride your existing routes, earn per verified kilometre, and be among the first riders in Rotterdam.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.YANDEX_SITE_VERIFICATION
      ? { yandex: process.env.YANDEX_SITE_VERIFICATION }
      : {}),
    other: {
      ...(process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : {}),
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MOVRR — Everyday rides, rewarded.",
    description:
      "Join MOVRR early access. Ride your existing routes and earn per verified kilometre.",
    locale: "en_GB",
    alternateLocale: ["nl_NL"],
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
    title: "MOVRR — Everyday rides, rewarded.",
    description:
      "Join MOVRR early access. Ride your existing routes and earn per verified kilometre.",
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071f18",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const locale = normalizeLocale(requestHeaders.get(REQUEST_LOCALE_HEADER));
  const pathname = requestHeaders.get(REQUEST_PATHNAME_HEADER) ?? "/";
  const dictionary = await getDictionary(locale);
  const structuredData = buildStructuredData(locale, dictionary, pathname);

  return (
    <html
      lang={locale}
      className={`${manrope.variable} antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-background text-foreground">
        <JsonLd data={structuredData} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
