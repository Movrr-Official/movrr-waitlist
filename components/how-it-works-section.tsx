import {
  Bike,
  CheckCircle2,
  ClipboardList,
  WalletCards,
} from "lucide-react";
import type { Dictionary } from "@/locales/en";

interface HowItWorksSectionProps {
  copy: Dictionary["howItWorks"];
}

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  const icons = [ClipboardList, CheckCircle2, Bike, WalletCards];

  return (
    <section id="how-it-works" className="bg-secondary py-24 text-white md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          {copy.heading.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.heading.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {copy.heading.title}
          </h2>
          {copy.heading.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-white/72 md:text-xl">
              {copy.heading.subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <article
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                key={step.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-6xl font-black leading-none text-white/18">
                    0{index + 1}
                  </div>
                  <div className="rounded-2xl bg-primary p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-10 text-2xl font-black uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/72">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
