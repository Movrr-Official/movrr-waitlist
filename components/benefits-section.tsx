import { Zap, Target, Trophy } from "lucide-react";
import type { Dictionary } from "@/locales/en";

interface BenefitsSectionProps {
  copy: Dictionary["benefits"];
}

export function BenefitsSection({ copy }: BenefitsSectionProps) {
  const icons = [Zap, Target, Trophy];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-tight">
            {copy.titleLines[0]}
            <br />
            <span className="text-primary">{copy.titleLines[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            {copy.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {copy.items.map((item, index) => {
              const Icon = icons[index];
              const useDark = index === 1;

              return (
                <div className="text-center" key={item.title}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${useDark ? "bg-secondary" : "bg-primary"}`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

