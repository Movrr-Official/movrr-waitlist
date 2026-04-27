"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { track } from "@vercel/analytics";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface WaitlistSuccessStateProps {
  copy: Dictionary["waitlistForm"];
  locale: Locale;
  onReset: () => void;
}

export function WaitlistSuccessState({
  copy,
  locale,
  onReset,
}: WaitlistSuccessStateProps) {
  const instagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = instagramRef.current;
    if (!element) return;

    let hasTracked = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || hasTracked) return;
        hasTracked = true;
        track("Waitlist Success Instagram Prompt Viewed", { locale });
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [locale]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Success confirmation ── */}
      <div className="pb-10 pt-12 text-center">
        <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-movrr-bg-primary/20 bg-movrr-bg-primary/[0.07]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
            className="text-movrr-bg-primary"
          >
            <path
              d="M3.5 9L7 12.5L14.5 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-secondary md:text-3xl">
          {copy.success.title}
        </h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {copy.success.description}
        </p>
      </div>

      {/* ── Instagram invitation ── */}
      <motion.div
        ref={instagramRef}
        className="border-t border-border pb-10 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28, duration: 0.5, ease: "easeOut" }}
      >
        <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/60">
          {copy.success.instagram.eyebrow}
        </p>
        <h4 className="text-base font-semibold tracking-[-0.02em] text-secondary">
          {copy.success.instagram.heading}
        </h4>
        <p className="mb-7 mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {copy.success.instagram.body}
        </p>
        <a
          href={copy.success.instagram.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={copy.success.instagram.cta}
          onClick={() =>
            track("Waitlist Success Instagram Follow Clicked", { locale })
          }
          className="group inline-flex w-full items-center gap-3 rounded-xl border border-border bg-transparent px-5 py-3.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-secondary hover:bg-secondary hover:text-white"
        >
          <Instagram
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <span className="flex-1">{copy.success.instagram.cta}</span>
          <span className="text-xs text-muted-foreground/50 transition-colors group-hover:text-white/50">
            {copy.success.instagram.handle}
          </span>
          <ArrowRight
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:rotate-45"
            aria-hidden="true"
          />
        </a>
      </motion.div>

      {/* ── Reset ── */}
      <div className="border-t border-border pt-6 text-center">
        <button
          type="button"
          onClick={() => {
            track("Waitlist Form Reset Clicked", { locale });
            onReset();
          }}
          className="text-xs text-muted-foreground/45 underline underline-offset-2 transition-colors duration-150 hover:text-muted-foreground"
        >
          {copy.actions.reset}
        </button>
      </div>
    </motion.div>
  );
}
