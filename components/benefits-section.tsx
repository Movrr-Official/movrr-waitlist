"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowRight, Coins, Eye, ShieldCheck, TimerReset } from "lucide-react";
import {
  cardReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface BenefitsSectionProps {
  copy: Dictionary["riderBenefits"];
}

export function BenefitsSection({ copy }: BenefitsSectionProps) {
  const icons = [Coins, Eye, TimerReset, ShieldCheck];
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    track("Benefits Join Waitlist Clicked");
  };

  return (
    <motion.section
      className="border-b border-border bg-white py-32 lg:py-44"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="mb-20 grid gap-8 lg:mb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div variants={headingReveal}>
            {copy.heading.eyebrow ? (
              <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {copy.heading.eyebrow}
              </p>
            ) : null}
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-secondary">
              {copy.heading.title}
            </h2>
          </motion.div>
          {copy.heading.subtitle ? (
            <motion.p
              className="self-end text-base leading-relaxed text-muted-foreground lg:max-w-sm"
              variants={headingReveal}
            >
              {copy.heading.subtitle}
            </motion.p>
          ) : null}
        </div>

        <div className="divide-y divide-border">
          {copy.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                variants={cardReveal}
                className="grid grid-cols-1 gap-5 py-12 lg:grid-cols-[9rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-12 lg:py-16"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="text-[clamp(1.5rem,2vw,2.25rem)] font-semibold leading-snug tracking-[-0.03em] text-secondary">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-4 grid grid-cols-1 gap-5 pt-12 lg:grid-cols-[9rem_1fr_minmax(0,26rem)] lg:gap-12"
          variants={headingReveal}
        >
          <div className="hidden lg:block" />
          <div className="flex flex-col items-start gap-3">
            <button
              type="button"
              onClick={scrollToSignup}
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-movrr-bg-primary px-7 text-sm font-semibold text-movrr-text-inverse transition-colors duration-200 hover:bg-movrr-bg-secondary"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </button>
            {copy.ctaNote ? (
              <p className="text-xs font-semibold text-muted-foreground/70">
                {copy.ctaNote}
              </p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
