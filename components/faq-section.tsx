"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  cardReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface FAQSectionProps {
  copy: Dictionary["faq"];
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={cardReveal}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-7 text-left transition-opacity duration-150 hover:opacity-70"
      >
        <span className="text-base font-semibold tracking-[-0.01em] text-secondary md:text-lg">
          {question}
        </span>
        {open ? (
          <Minus className="mt-1 h-5 w-5 shrink-0 text-secondary/40" />
        ) : (
          <Plus className="mt-1 h-5 w-5 shrink-0 text-secondary/40" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-8 text-base leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection({ copy }: FAQSectionProps) {
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

        <motion.div
          className="border-t border-border"
          variants={sectionStagger}
        >
          {copy.items.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
