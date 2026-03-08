"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { formReveal, headingReveal, sectionStagger, viewportOnce } from "@/lib/motion";
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
      className="bg-secondary py-24 text-white md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div className="max-w-xl" variants={headingReveal}>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-lg text-white/75 md:text-xl">
              {copy.subtitle}
            </p>
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-white/55">
              {copy.reassurance}
            </p>
          </motion.div>

          <motion.div variants={formReveal}>
            <Card className="border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
              <CardContent className="p-8 md:p-12">
                <WaitlistForm copy={formCopy} locale={locale} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
