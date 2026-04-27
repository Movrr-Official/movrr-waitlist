"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import type { Dictionary } from "@/locales/en";

interface HeroSectionProps {
  copy: Dictionary["hero"];
  brandName: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection({ copy, brandName }: HeroSectionProps) {
  const proofPointsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = proofPointsRef.current;
    if (!element) return;

    let hasTracked = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || hasTracked) return;
        hasTracked = true;
        track("Hero Trust Signals Viewed", {
          signalCount: copy.proofPoints.length,
        });
        observer.disconnect();
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [copy.proofPoints.length]);

  const scrollToSection = (targetId: string, eventName: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    track(eventName);
  };

  return (
    <motion.section
      className="overflow-hidden border-b border-movrr-text-inverse/10 bg-movrr-bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid min-h-[60vh] grid-cols-1 lg:grid-cols-[1fr_minmax(0,40vw)]">
        {/* Text column */}
        <div className="flex flex-col justify-between px-6 pb-14 pt-14 lg:px-12 lg:pb-12 lg:pt-16">
          <div>
            {/* Logo lockup */}
            <motion.div
              className="mb-14 flex items-center gap-2.5"
              variants={itemVariants}
            >
              <Image
                src="/movrr-icon.png"
                alt={copy.logoAlt}
                width={28}
                height={28}
                priority
                className="h-7 w-7"
              />
              <span className="text-xl font-semibold tracking-tight text-movrr-text-inverse">
                {brandName}
              </span>
            </motion.div>

            {/* Eyebrow + status badges */}
            <motion.div
              className="mb-10 flex flex-wrap gap-2"
              variants={itemVariants}
            >
              <span className="inline-flex items-center rounded-full border border-movrr-text-inverse/20 bg-movrr-text-inverse/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {copy.eyebrow}
              </span>
              {copy.status.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-movrr-text-inverse/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/40"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Headline — last line faded */}
            <motion.h1
              className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-movrr-text-inverse"
              variants={itemVariants}
            >
              {copy.titleLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === copy.titleLines.length - 1 ? "text-movrr-text-inverse/45" : ""}`}
                >
                  {line}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Bottom content — floats to bottom on desktop */}
          <motion.div className="mt-16" variants={itemVariants}>
            {copy.highlightedLine ? (
              <p className="mb-5 max-w-md text-lg font-semibold leading-snug text-primary">
                {copy.highlightedLine}
              </p>
            ) : null}

            <p className="max-w-sm text-base leading-relaxed text-movrr-text-inverse/55">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  scrollToSection("signup", "Join Waitlist Clicked")
                }
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-movrr-text-inverse/30 bg-movrr-bg-glass px-7 text-sm font-semibold text-movrr-text-brand transition-colors duration-200 hover:bg-movrr-bg-elevated"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45" />
              </button>
              <button
                onClick={() =>
                  scrollToSection("how-it-works", "See How It Works Clicked")
                }
                className="inline-flex h-12 items-center rounded-xl border border-movrr-text-inverse/15 bg-transparent px-7 text-sm font-medium text-movrr-text-inverse/75 transition-colors duration-200 hover:bg-movrr-text-inverse/8 hover:text-movrr-text-inverse"
              >
                {copy.secondaryCta}
              </button>
            </div>

            {/* Proof points */}
            <div className="mt-8 flex flex-wrap gap-2" ref={proofPointsRef}>
              {copy.proofPoints.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-movrr-text-inverse/10 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.06em] text-movrr-text-inverse/45"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Audience — desktop only */}
            <div className="mt-10 hidden border-t border-movrr-text-inverse/10 pt-6 md:block">
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-inverse/30">
                {copy.audienceLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {copy.audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-movrr-text-inverse/10 bg-movrr-text-inverse/[0.06] px-4 py-2 text-xs font-medium text-movrr-text-inverse/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image column — fills full height, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <Image
            src="/hero-cyclist-rotterdam-modern-urban.png"
            alt={copy.backgroundAlt}
            fill
            quality={90}
            sizes="40vw"
            className="object-cover object-center"
            priority
          />
          {/* Fade left — blends image into dark bg */}
          <div className="absolute inset-0 bg-linear-to-r from-movrr-bg-primary/60 via-transparent to-transparent" />
          {/* Fade bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-movrr-bg-primary/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}
