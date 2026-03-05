import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { LanguageSwitcher } from "@/components/language-switcher";
import { REQUEST_LOCALE_HEADER, normalizeLocale } from "@/lib/i18n/config";
import { getDictionaryByLocale } from "@/lib/i18n/dictionary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  authors: [{ name: "Movrr" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const locale = normalizeLocale(requestHeaders.get(REQUEST_LOCALE_HEADER));
  const dictionary = await getDictionaryByLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <LanguageSwitcher labels={dictionary.languageSwitcher} />
        <Analytics />
      </body>
    </html>
  );
}
