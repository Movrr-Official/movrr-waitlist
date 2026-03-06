import { Coins, Eye, ShieldCheck, TimerReset } from "lucide-react";
import type { Dictionary } from "@/locales/en";

interface BenefitsSectionProps {
  copy: Dictionary["riderBenefits"];
}

export function BenefitsSection({ copy }: BenefitsSectionProps) {
  const icons = [Coins, Eye, TimerReset, ShieldCheck];

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
          {copy.heading.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {copy.heading.subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                className="rounded-[2rem] border border-border bg-muted/30 p-8"
                key={item.title}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-2xl font-black text-secondary">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
