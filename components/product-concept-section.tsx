"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bike, MonitorSmartphone, PlugZap, Umbrella } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  cardReveal,
  headingReveal,
  imageReveal,
  sectionStagger,
  viewportOnce,
} from "@/lib/motion";
import type { Dictionary } from "@/locales/en";

interface ProductConceptSectionProps {
  copy: Dictionary["productConcept"];
}

const productConceptImages = [
  {
    id: 1,
    title: "Wheel Cover",
    src: "/movrr-wheel-disc-advertising.png",
    objectPosition: "25% center",
  },
  {
    id: 2,
    title: "Frame Panel",
    src: "/movrr-frame-panel-advertising.png",
    objectPosition: "center",
  },
  {
    id: 3,
    title: "Rear Rack Panel",
    src: "/movrr-rear-panel-advertising.png",
    objectPosition: "center",
  },
  {
    id: 4,
    title: "Cargo Side Panel",
    src: "/movrr-cargo-side-panel-advertising.png",
    objectPosition: "center",
  },
] as const;

export function ProductConceptSection({ copy }: ProductConceptSectionProps) {
  const icons = [Bike, Umbrella, MonitorSmartphone, PlugZap];
  const [activeIndex, setActiveIndex] = useState(2);

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
          {copy.body ? (
            <motion.p
              className="self-end text-base leading-relaxed text-muted-foreground lg:max-w-sm"
              variants={headingReveal}
            >
              {copy.body}
            </motion.p>
          ) : null}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <motion.div variants={sectionStagger}>
            <motion.div
              className="border-t divide-y divide-border"
              variants={sectionStagger}
            >
              {copy.highlights.map((highlight, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    className="flex items-center gap-5 py-5"
                    key={highlight}
                    variants={cardReveal}
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <span className="text-base font-medium text-secondary">
                      {highlight}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={cardReveal} className="lg:pl-10">
              <Link
                href="#signup"
                className="mt-10 inline-flex h-12 items-center rounded-xl border border-secondary px-6 text-sm font-semibold text-secondary transition-colors duration-200 hover:bg-secondary/[0.08]"
              >
                {copy.cta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            variants={imageReveal}
          >
            <div className="flex h-[30rem] flex-row items-center justify-center gap-3 overflow-hidden bg-muted/30 p-3">
              {productConceptImages.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`relative h-full cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? "w-[58%]" : "w-[14%]"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                  >
                    <Image
                      src={item.src}
                      alt={`${copy.imageAlt} - ${item.title}`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: item.objectPosition }}
                      sizes={
                        isActive
                          ? "(max-width: 1023px) 72vw, 34vw"
                          : "(max-width: 1023px) 18vw, 8vw"
                      }
                      quality={78}
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-700 ease-in-out ${
                        isActive ? "bg-black/20" : "bg-black/40"
                      }`}
                    />

                    <span
                      className={`absolute text-sm font-semibold whitespace-nowrap text-white transition-all duration-300 ease-in-out ${
                        isActive
                          ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
                          : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-left"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
