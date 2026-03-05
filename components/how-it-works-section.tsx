import type { Dictionary } from "@/locales/en";

interface HowItWorksSectionProps {
  copy: Dictionary["howItWorks"];
}

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <section className="py-32 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {copy.titlePrefix} <span className="text-primary">{copy.titleAccent}</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{copy.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {copy.steps.map((step, index) => (
              <div className="text-center" key={step.title}>
                <div className={`text-8xl font-black mb-6 leading-none ${index % 2 === 0 ? "text-primary" : "text-white"}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

