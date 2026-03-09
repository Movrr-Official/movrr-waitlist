"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";

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
    selectedCity?: string
  ) => {
    if (selectedCity) {
      track("Waitlist City Prefilled", {
        city: selectedCity,
        source: "city-launch-card",
      });
      window.dispatchEvent(
        new CustomEvent("movrr:city-selected", {
          detail: selectedCity,
        })
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
      className="bg-secondary py-24 text-white md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStagger}
    >
      <div className="container">
        <motion.div className="max-w-3xl" variants={headingReveal}>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            {cityCopy.heading.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            {cityCopy.heading.title}
          </h2>
          {cityCopy.heading.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-white/82 md:text-xl">
              {cityCopy.heading.subtitle}
            </p>
          ) : null}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-start"
          variants={headingReveal}
        >
          <div className="inline-flex rounded-full bg-primary px-3 py-1.5 text-sm font-bold tracking-wide text-secondary">
            {cityCopy.badge}
          </div>
        </motion.div>

        <motion.div
          className="mt-14 grid max-w-[920px] gap-5 md:grid-cols-3"
          variants={sectionStagger}
        >
          {cityCopy.cards.map((card) => (
            <motion.article
              key={card.name}
              className="group relative min-h-[182px] overflow-hidden rounded-md border border-white/10 bg-white/5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)]"
              variants={cardReveal}
            >
              <Image
                src={card.asset}
                alt={card.name}
                width={520}
                height={360}
                className={`h-full w-full object-cover transition duration-300 ${
                  card.featured
                    ? "scale-[1.02]"
                    : "grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/34 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div />
                <div className="max-w-[180px]">
                  <h3 className="text-[2rem] font-bold leading-none tracking-tight text-white">
                    {card.name}
                  </h3>
                  <Button
                    variant="outline"
                    className="mt-5 h-10 rounded-md border border-white bg-white px-4 text-[11px] font-bold uppercase tracking-[0.14em] text-secondary transition-colors duration-200 hover:bg-white/90"
                    onClick={() =>
                      scrollToSignup(
                        "signup",
                        `Join Waitlist Clicked - ${card.name}`,
                        card.name
                      )
                    }
                  >
                    {card.cta}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
