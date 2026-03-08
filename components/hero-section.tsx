"use client";

import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/locales/en";

interface HeroSectionProps {
  copy: Dictionary["hero"];
  brandName: string;
}

const HERO_IMAGE_CLIP_PATH = "polygon(28% 0%, 100% 0%, 100% 100%, 3% 100%)";
const HERO_SEAM_CLIP_PATH = "polygon(27.4% 0%, 28.2% 0%, 3.6% 100%, 2.8% 100%)";
const HERO_IMAGE_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23f2f2f2'/%3E%3Cstop offset='45%25' stop-color='%23d8d8d8'/%3E%3Cstop offset='72%25' stop-color='%2323B245'/%3E%3Cstop offset='100%25' stop-color='%230f0f0f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3C/svg%3E";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection({ copy, brandName }: HeroSectionProps) {
  const scrollToSection = (targetId: string, eventName: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    track(eventName);
  };

  return (
    <motion.section
      className="relative overflow-hidden bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[580px] bg-gradient-to-b from-muted/70 via-white to-white" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative container py-8 md:py-10 lg:py-12">
        <motion.div
          className="mb-12 flex items-center justify-center md:justify-start"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/movrr-icon.png"
              alt={copy.logoAlt}
              width={48}
              height={48}
              priority
              className="h-11 w-11 md:h-12 md:w-12"
            />
            <span className="text-2xl font-black tracking-tight text-secondary">
              {brandName}
            </span>
          </div>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-12">
          <div className="max-w-2xl">
            <motion.div className="mb-6 flex flex-wrap gap-3" variants={itemVariants}>
              <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-bold tracking-wide text-primary">
                {copy.eyebrow}
              </span>
              {copy.status.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white px-3 py-1.5 text-sm font-semibold tracking-wide text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
            </motion.div>

            <motion.h1
              className="max-w-xl text-5xl font-black leading-[0.92] tracking-tight text-secondary md:text-7xl lg:text-[5.5rem]"
              variants={itemVariants}
            >
              {copy.titleLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </motion.h1>

            {copy.highlightedLine ? (
              <motion.p
                className="mt-6 max-w-lg text-lg font-semibold text-primary md:text-xl"
                variants={itemVariants}
              >
                {copy.highlightedLine}
              </motion.p>
            ) : null}

            <motion.p
              className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              {copy.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="h-14 rounded-lg bg-primary px-8 text-xl font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_18px_40px_-22px_rgba(35,178,69,0.55)] transition-colors duration-200 hover:bg-primary/90"
                onClick={() =>
                  scrollToSection("signup", "Join Waitlist Clicked")
                }
              >
                {copy.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-lg border-2 border-secondary px-6 text-lg font-bold uppercase tracking-[0.12em] text-secondary transition-colors duration-200 hover:bg-secondary hover:text-white"
                onClick={() =>
                  scrollToSection("how-it-works", "See How It Works Clicked")
                }
              >
                {copy.secondaryCta}
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 border-t border-border pt-6"
              variants={itemVariants}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                {copy.audienceLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                {copy.audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative min-h-[420px] overflow-hidden md:min-h-[520px]"
            initial={{
              clipPath:
                "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            }}
            animate={{ clipPath: HERO_IMAGE_CLIP_PATH }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: HERO_IMAGE_CLIP_PATH }}
            >
              <Image
                src="/movrr-close-up-product-shot.png"
                alt={copy.backgroundAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover object-[76%_center] lg:object-[74%_center]"
                placeholder="blur"
                blurDataURL={HERO_IMAGE_BLUR}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/6" />
            </div>

            <div
              className="absolute inset-y-0 left-0 w-full bg-background/70"
              style={{ clipPath: HERO_SEAM_CLIP_PATH }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
