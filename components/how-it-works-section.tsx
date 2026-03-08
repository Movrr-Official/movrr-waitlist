"use client";

import { motion } from "framer-motion";

import { cardReveal, headingReveal, sectionStagger, viewportOnce } from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface HowItWorksSectionProps {
  copy: Dictionary["howItWorks"];
}

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <motion.section
      id="how-it-works"
      className="bg-secondary py-24 text-white md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <motion.div className="max-w-3xl" variants={headingReveal}>
          {copy.heading.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.heading.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {copy.heading.title}
          </h2>
          {copy.heading.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-white/72 md:text-xl">
              {copy.heading.subtitle}
            </p>
          ) : null}
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={sectionStagger}
        >
          {copy.steps.map((step, index) => (
            <motion.article
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              key={step.title}
              variants={cardReveal}
            >
              <div className="text-6xl font-black leading-none text-white/18">
                0{index + 1}
              </div>
              <h3 className="mt-10 text-2xl font-black tracking-wide text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/72">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
