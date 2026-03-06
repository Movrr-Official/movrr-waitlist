import type { Dictionary } from "@/locales/en";

interface CityLaunchSectionProps {
  copy: Dictionary["cityLaunch"];
}

export function CityLaunchSection({ copy }: CityLaunchSectionProps) {
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

        <div className="mt-12 flex flex-wrap gap-4">
          {copy.cities.map((city) => (
            <div
              key={city}
              className="rounded-full border border-secondary px-6 py-4 text-base font-bold uppercase tracking-[0.18em] text-secondary"
            >
              {city}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {copy.footnote}
        </p>
      </div>
    </section>
  );
}
