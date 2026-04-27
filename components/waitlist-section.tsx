"use client";

import { motion } from "framer-motion";

import {
  formReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import { WaitlistForm } from "./forms/waitlist-form";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface WaitlistSectionProps {
  copy: Dictionary["waitlistSection"];
  formCopy: Dictionary["waitlistForm"];
  locale: Locale;
}

export function WaitlistSection({
  copy,
  formCopy,
  locale,
}: WaitlistSectionProps) {
  return (
    <motion.section
      id="signup"
      className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 text-movrr-text-inverse lg:py-44"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20">
          <motion.div variants={headingReveal}>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              {copy.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-movrr-text-inverse/50 lg:max-w-sm">
              {copy.subtitle}
            </p>
            <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-inverse/30">
              {copy.reassurance}
            </p>
          </motion.div>

          <motion.div variants={formReveal}>
            <div className="rounded-none border border-movrr-text-inverse/10 bg-movrr-bg-canvas text-foreground shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <div className="p-8 md:p-12">
                <WaitlistForm copy={formCopy} locale={locale} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
