"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { headingReveal, sectionStagger, viewportOnce } from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface FooterProps {
  locale: Locale;
  copy: Dictionary["footer"];
  brandName: string;
}

export function Footer({ locale, copy, brandName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-secondary py-0 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="bg-secondary pb-10 pt-24">
          <motion.div
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            variants={headingReveal}
          >
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/movrr-icon.png"
                  alt={copy.logoAlt}
                  className="h-11 w-11 md:h-12 md:w-12"
                />
                <h3 className="text-4xl font-black tracking-tight text-primary">
                  {brandName}
                </h3>
              </div>
              <p className="mt-3 text-lg text-white/78">{copy.tagline}</p>
            </div>
            <div className="flex items-center gap-8 text-base text-white/82">
              <Link
                href={withLocalePath(locale, "/privacy")}
                className="transition-colors hover:text-white"
              >
                {copy.privacy}
              </Link>
              <Link
                href={withLocalePath(locale, "/terms")}
                className="transition-colors hover:text-white"
              >
                {copy.terms}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="mt-16 text-sm text-white/60"
            variants={headingReveal}
          >
            {"\u00A9"} {currentYear} {copy.copyrightSuffix}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
