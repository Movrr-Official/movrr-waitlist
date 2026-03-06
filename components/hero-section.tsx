"use client";

import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Dictionary } from "@/locales/en";

interface HeroSectionProps {
  copy: Dictionary["hero"];
  brandName: string;
}

export function HeroSection({ copy, brandName }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[580px] bg-gradient-to-b from-muted/70 via-white to-white" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative container py-8 md:py-10 lg:py-12">
        <div className="mb-12 flex items-center justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <img
              src="/movrr-icon.png"
              alt={copy.logoAlt}
              className="h-11 w-11 md:h-12 md:w-12"
            />
            <span className="text-2xl font-black tracking-tight text-secondary">
              {brandName}
            </span>
          </div>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap gap-3">
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
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.92] tracking-tight text-secondary md:text-7xl lg:text-[5.5rem]">
              {copy.titleLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h1>

            {copy.highlightedLine ? (
              <p className="mt-6 max-w-lg text-lg font-semibold text-primary md:text-xl">
                {copy.highlightedLine}
              </p>
            ) : null}

            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-xl font-bold rounded-lg uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={() => {
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" });
                  track("Join Waitlist Clicked");
                }}
              >
                {copy.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-lg border-2 border-secondary px-6 text-lg font-bold uppercase tracking-wider text-secondary hover:bg-secondary hover:text-white"
                onClick={() => {
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                  track("See How It Works Clicked");
                }}
              >
                {copy.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 border-t border-border pt-6">
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
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full border border-primary/20 bg-primary/10 lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary p-5 shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent" />
                <Image
                  src="/biking-through-rotterdam-cityscape.png"
                  alt={copy.backgroundAlt}
                  width={920}
                  height={1080}
                  priority
                  className="h-[420px] w-full object-cover object-center md:h-[520px]"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9SQ2TQ6y+WgZPJ7FeYqSmL//Z"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-white/95 p-5 shadow-2xl backdrop-blur md:inset-x-6 md:bottom-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                    {copy.visualCardLabel}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-black tracking-tight text-secondary md:text-3xl">
                        {copy.visualCardTitle}
                      </h2>
                      <p className="mt-3 text-sm text-muted-foreground md:text-base">
                        {copy.visualCardDescription}
                      </p>
                    </div>
                    <div className="rounded-full bg-primary p-3 text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
