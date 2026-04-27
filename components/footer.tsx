"use client";

import { Instagram } from "lucide-react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { headingReveal, sectionStagger, viewportOnce } from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface FooterProps {
  locale: Locale;
  copy: Dictionary["footer"];
  brandName: string;
  languageSwitcherLabels: Dictionary["languageSwitcher"];
}

export function Footer({
  locale,
  copy,
  brandName,
  languageSwitcherLabels,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-movrr-bg-footer py-0 text-movrr-text-inverse"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="pb-12 pt-24">
          <motion.div
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            variants={headingReveal}
          >
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/movrr-icon.png"
                  alt={copy.logoAlt}
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <h3 className="text-xl font-semibold tracking-tight text-movrr-text-inverse">
                  {brandName}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-movrr-text-inverse/45">
                {copy.tagline}
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <a
                href={copy.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.instagram}
                className="inline-flex items-center text-movrr-text-inverse/40 transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <div className="flex items-center gap-8 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/35">
                <Link
                  href={withLocalePath(locale, "/privacy")}
                  className="transition-colors hover:text-movrr-text-inverse/60"
                >
                  {copy.privacy}
                </Link>
                <Link
                  href={withLocalePath(locale, "/terms")}
                  className="transition-colors hover:text-movrr-text-inverse/60"
                >
                  {copy.terms}
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-14 flex items-center justify-between"
            variants={headingReveal}
          >
            <Suspense>
              <LanguageSwitcher labels={languageSwitcherLabels} />
            </Suspense>
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/20">
              {"©"} {currentYear} {copy.copyrightSuffix}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
