"use client";

import { motion } from "framer-motion";

import {
  cardReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface ValuePropositionProps {
  copy: Dictionary["valueProposition"];
}

export function ValueProposition({ copy }: ValuePropositionProps) {
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

        <div className="border-t divide-y divide-border">
          {copy.items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardReveal}
              className="grid grid-cols-1 gap-5 py-12 lg:grid-cols-[9rem_1fr_minmax(0,26rem)] lg:items-center lg:gap-12 lg:py-16"
            >
              <span className="text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-secondary/[0.07]">
                0{index + 1}
              </span>
              <h3 className="text-[clamp(1.75rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-secondary">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
