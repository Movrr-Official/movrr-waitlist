import Image from "next/image";
import bob from "../public/movrr-ride-bob.png";
import type { Dictionary } from "@/locales/en";

interface ProductConceptSectionProps {
  copy: Dictionary["productConcept"];
}

export function ProductConceptSection({ copy }: ProductConceptSectionProps) {
  return (
    <section className="bg-secondary py-24 text-white md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative">
            <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="rounded-[1.5rem] bg-white p-6">
                <Image
                  src={bob}
                  alt={copy.imageAlt}
                  width={560}
                  height={560}
                  placeholder="blur"
                  className="mx-auto h-auto w-full max-w-sm object-contain"
                  sizes="(min-width: 1024px) 420px, 80vw"
                />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {copy.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-white/80"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            {copy.heading.eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                {copy.heading.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {copy.heading.title}
            </h2>
            {copy.heading.subtitle ? (
              <p className="mt-5 text-lg text-white/74 md:text-xl">
                {copy.heading.subtitle}
              </p>
            ) : null}
            <p className="mt-8 text-base leading-8 text-white/68 md:text-lg">
              {copy.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
