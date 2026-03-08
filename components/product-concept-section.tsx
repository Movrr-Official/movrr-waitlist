"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bike, MonitorSmartphone, PlugZap, Umbrella } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  },
  {
    id: 2,
    title: "Frame Panel",
    src: "/movrr-frame-panel-advertising.png",
  },
  {
    id: 3,
    title: "Rear Rack Panel",
    src: "/movrr-rear-panel-advertising.png",
  },
  {
    id: 4,
    title: "Cargo Side Panel",
    src: "/movrr-cargo-side-panel-advertising.png",
  },
] as const;

export function ProductConceptSection({ copy }: ProductConceptSectionProps) {
  const icons = [Bike, Umbrella, MonitorSmartphone, PlugZap];
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <motion.section
      className="bg-white py-24 md:py-28"
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
          <h2 className="mt-4 text-4xl font-black leading-tight text-secondary md:text-6xl">
            {copy.heading.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div variants={sectionStagger}>
            <motion.p
              className="max-w-xl text-lg leading-8 text-secondary/90 md:text-xl"
              variants={headingReveal}
            >
              {copy.body}
            </motion.p>

            <motion.div className="mt-8 space-y-5" variants={sectionStagger}>
              {copy.highlights.map((highlight, index) => {
                const Icon = icons[index];

                return (
                  <motion.div
                    className="flex items-center gap-3"
                    key={highlight}
                    variants={cardReveal}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-base font-medium text-secondary">
                      {highlight}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={cardReveal}>
              <Button
                asChild
                variant="outline"
                className="mt-10 h-12 rounded-lg border-2 border-secondary bg-white px-6 text-base font-bold uppercase tracking-wide text-secondary hover:bg-secondary hover:text-white"
              >
                <Link href="#signup">{copy.cta}</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden bg-muted/35"
            variants={imageReveal}
          >
            <div className="flex h-[30rem] flex-row items-center justify-center gap-4 overflow-hidden p-4">
              {productConceptImages.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`relative h-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${
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
                      priority={isActive}
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    <span
                      className={`absolute text-lg font-semibold whitespace-nowrap text-white transition-all duration-300 ease-in-out ${
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
