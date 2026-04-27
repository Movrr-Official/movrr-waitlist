"use client";

import { motion } from "framer-motion";

import {
  cardReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface HowItWorksSectionProps {
  copy: Dictionary["howItWorks"];
}

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <motion.section
      id="how-it-works"
      className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 text-movrr-text-inverse lg:py-44"
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
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              {copy.heading.title}
            </h2>
          </motion.div>
          {copy.heading.subtitle ? (
            <motion.p
              className="self-end text-base leading-relaxed text-movrr-text-inverse/50 lg:max-w-sm"
              variants={headingReveal}
            >
              {copy.heading.subtitle}
            </motion.p>
          ) : null}
        </div>

        <div className="divide-y divide-movrr-text-inverse/10">
          {copy.steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={cardReveal}
              className="grid grid-cols-1 gap-5 py-12 lg:grid-cols-[9rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-12 lg:py-16"
            >
              <span className="text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-inverse/[0.08]">
                0{index + 1}
              </span>
              <h3 className="text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-inverse">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-movrr-text-inverse/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
