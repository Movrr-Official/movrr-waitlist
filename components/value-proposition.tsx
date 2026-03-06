import type { Dictionary } from "@/locales/en";

interface ValuePropositionProps {
  copy: Dictionary["valueProposition"];
}

export function ValueProposition({ copy }: ValuePropositionProps) {
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-3xl font-black text-secondary md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
