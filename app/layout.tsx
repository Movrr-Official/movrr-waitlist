import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import { REQUEST_LOCALE_HEADER, normalizeLocale } from "@/lib/i18n/config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  authors: [{ name: "Movrr" }],
  robots: { index: true, follow: true },
  title: {
    template: "%s | Movrr",
    default: "Movrr — Everyday rides, rewarded.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const locale = normalizeLocale(requestHeaders.get(REQUEST_LOCALE_HEADER));

  return (
    <html
      lang={locale}
      className={`${manrope.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
