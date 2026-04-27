"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { track } from "@vercel/analytics";

import {
  cardReveal,
  headingReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface LaunchShowcaseSectionProps {
  cityCopy: Dictionary["cityLaunch"];
}

export function LaunchShowcaseSection({
  cityCopy,
}: LaunchShowcaseSectionProps) {
  const scrollToSignup = (
    targetId: string,
    eventName: string,
    selectedCity?: string,
  ) => {
    if (selectedCity) {
      track("Waitlist City Prefilled", {
        city: selectedCity,
        source: "city-launch-card",
      });
      window.dispatchEvent(
        new CustomEvent("movrr:city-selected", {
          detail: selectedCity,
        }),
      );
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    track(eventName, {
      source: "city-launch-card",
      ...(selectedCity ? { city: selectedCity } : {}),
    });
  };

  return (
    <motion.section
      className="border-b border-movrr-text-inverse/10 bg-movrr-bg-primary py-32 text-movrr-text-inverse lg:py-44"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <div className="mb-20 lg:mb-28 lg:max-w-[60%]">
          <motion.div variants={headingReveal}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {cityCopy.heading.eyebrow}
              </p>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/[0.12] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {cityCopy.badge}
              </span>
            </div>
            <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-movrr-text-inverse">
              {cityCopy.heading.title}
              <br />
              <span className="text-movrr-text-inverse/40">
                {cityCopy.heading.subtitle}
              </span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={sectionStagger}
        >
          {cityCopy.cards.map((card) => (
            <motion.article
              key={card.name}
              className="group relative min-h-[200px] overflow-hidden border border-movrr-text-inverse/10 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)]"
              variants={cardReveal}
            >
              <Image
                src={card.asset}
                alt={card.name}
                width={520}
                height={360}
                className={`h-full w-full object-cover transition duration-500 ${
                  card.featured
                    ? "scale-[1.02]"
                    : "grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/34 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-none tracking-[-0.03em] text-movrr-text-inverse">
                  {card.name}
                </h3>
                <button
                  className="group/btn mt-5 inline-flex h-9 w-fit items-center gap-2 border border-movrr-text-inverse/20 bg-transparent px-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/70 transition-colors duration-200 hover:border-primary hover:text-primary"
                  onClick={() =>
                    scrollToSignup(
                      "signup",
                      `Join Waitlist Clicked - ${card.name}`,
                      card.name,
                    )
                  }
                >
                  {card.cta}
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:rotate-45" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
