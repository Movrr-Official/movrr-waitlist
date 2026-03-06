"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Dictionary } from "@/locales/en";

interface CityLaunchSectionProps {
  copy: Dictionary["cityLaunch"];
}

export function CityLaunchSection({ copy }: CityLaunchSectionProps) {
  return (
    <section className="bg-background py-0">
      <div className="container">
        <div className="overflow-hidden bg-secondary px-10 pb-24 pt-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:px-14">
          <p className="text-base font-medium text-white/88">{copy.heading.eyebrow}</p>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase tracking-wide text-secondary">
              {copy.badge}
            </div>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
              {copy.heading.title}
            </h2>
            {copy.heading.subtitle ? (
              <p className="mt-5 text-xl text-white/82">{copy.heading.subtitle}</p>
            ) : null}
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
            {copy.cards.map((card) => (
              <article
                key={card.name}
                className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5"
              >
                <Image
                  src={card.asset}
                  alt={card.name}
                  width={520}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-black/8" />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                    {card.iconLabel}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{card.name}</h3>
                    <Button
                      variant="outline"
                      className="mt-4 h-10 rounded-md border border-white bg-white px-4 text-xs font-bold uppercase tracking-wide text-secondary hover:bg-white/90"
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
      </div>
    </section>
  );
}
