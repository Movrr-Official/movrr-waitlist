import { Bike, MonitorSmartphone, PlugZap, Umbrella } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Dictionary } from "@/locales/en";

interface ProductConceptSectionProps {
  copy: Dictionary["productConcept"];
}

export function ProductConceptSection({ copy }: ProductConceptSectionProps) {
  const icons = [Bike, Umbrella, MonitorSmartphone, PlugZap];

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          {copy.heading.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.heading.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-4xl font-black leading-tight text-secondary md:text-6xl">
            {copy.heading.title}
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="max-w-xl text-lg leading-8 text-secondary/90 md:text-xl">
              {copy.body}
            </p>

            <div className="mt-8 space-y-5">
              {copy.highlights.map((highlight, index) => {
                const Icon = icons[index];

                return (
                  <div className="flex items-center gap-3" key={highlight}>
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-base font-medium text-secondary">
                      {highlight}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-10 h-12 rounded-lg border-2 border-secondary bg-white px-6 text-base font-bold uppercase tracking-wide text-secondary hover:bg-secondary hover:text-white"
            >
              <Link href="#signup">{copy.cta}</Link>
            </Button>
          </div>

          <div className="relative overflow-hidden bg-muted/35">
            <Image
              src="/movrr-display-panel-scene.png"
              alt={copy.imageAlt}
              width={1280}
              height={900}
              className="h-[30rem] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
