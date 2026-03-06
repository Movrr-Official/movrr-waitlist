"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/locales/en";

interface LaunchShowcaseSectionProps {
  cityCopy: Dictionary["cityLaunch"];
}

export function LaunchShowcaseSection({
  cityCopy,
}: LaunchShowcaseSectionProps) {
  return (
    <section className="bg-secondary py-24 text-white md:py-28">
      <div className="container">
        <div className="max-w-3xl">
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
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <div className="inline-flex rounded-full bg-primary px-3 py-1.5 text-sm font-bold tracking-wide text-secondary">
            {cityCopy.badge}
          </div>
        </div>

        <div className="mt-14 grid max-w-[920px] gap-4 md:grid-cols-3">
          {cityCopy.cards.map((card) => (
            <article
              key={card.name}
              className="group relative min-h-[168px] overflow-hidden rounded-md border border-white/10 bg-white/5"
            >
              <Image
                src={card.asset}
                alt={card.name}
                width={520}
                height={360}
                className={`h-full w-full object-cover transition duration-300 ${
                  card.featured
                    ? "scale-[1.02]"
                    : "grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-black/8" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div />
                <div>
                  <h3 className="text-[2rem] font-bold leading-none text-white">
                    {card.name}
                  </h3>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-md border border-white bg-white text-xs font-bold uppercase tracking-wide text-secondary hover:bg-white/90"
                    onClick={() => {
                      document
                        .getElementById("signup")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {card.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
