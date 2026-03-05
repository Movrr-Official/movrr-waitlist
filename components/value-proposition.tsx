import Image from "next/image";
import bob from "../public/movrr-ride-bob.png";
import type { Dictionary } from "@/locales/en";

interface ValuePropositionProps {
  copy: Dictionary["valueProposition"];
}

export function ValueProposition({ copy }: ValuePropositionProps) {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
                {copy.titleLines[0]}
                <br />
                {copy.titleLines[1]}
                <br />
                <span className="text-primary">{copy.titleLines[2]}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {copy.description}
              </p>
              <div className="space-y-6">
                {copy.bullets.map((bullet) => (
                  <div className="flex items-center gap-4" key={bullet}>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-lg font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[520px] lg:h-[520px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={bob}
                  alt={copy.imageAlt}
                  width={520}
                  height={520}
                  placeholder="blur"
                  sizes="(min-width:1024px) 520px, (min-width:768px) 320px, 240px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

