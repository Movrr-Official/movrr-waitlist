import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { WeglotLanguageSwitcher } from "@/Scripts/weglot-language-switcher";
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
  title: "Movrr - Transform Your Ride, Transform Your City",
  description:
    "Join the movement. Earn money while cycling and transform city streets into a canvas for brands. Flexible hours, reliable pay, and make an impact.",
  keywords:
    "bike advertising, cycling jobs, gig economy, urban mobility, brand advertising",
  authors: [{ name: "Movrr" }],
  openGraph: {
    title: "Movrr - Transform Your Ride, Transform Your City",
    description:
      "Join the movement. Earn money while cycling and transform city streets into a canvas for brands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movrr - Transform Your Ride, Transform Your City",
    description:
      "Join the movement. Earn money while cycling and transform city streets into a canvas for brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <WeglotLanguageSwitcher />
        <Analytics />
      </body>
    </html>
  );
}
