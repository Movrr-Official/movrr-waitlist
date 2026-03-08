"use client";

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

export function ProductConceptSection({ copy }: ProductConceptSectionProps) {
  const icons = [Bike, Umbrella, MonitorSmartphone, PlugZap];

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
            <Image
              src="/movrr-display-panel-scene.png"
              alt={copy.imageAlt}
              width={1280}
              height={900}
              className="h-[30rem] w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
