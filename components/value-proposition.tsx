import Image from "next/image";
import bob from "../public/movrr-ride-bob.png";

export function ValueProposition() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
                RIDE.
                <br />
                EARN.
                <br />
                <span className="text-primary">BELONG.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Turn every ride into extra cash. Whether you’re commuting to
                class, delivering food, or just biking through the city. Movrr
                makes your wheels work for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    Earn rewards from verified rides, fair and transparent
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    Ride when you want, no schedules and no bosses
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    Monthly rewards, always transparent with no hidden fees
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[520px] lg:h-[520px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={bob}
                  alt="Illustration of the Movrr rider mascot on a bike"
                  width={520}
                  height={520}
                  placeholder="blur"
                  sizes="(min-width:1024px) 520px, (min-width:768px) 320px, 240px"
                  priority
                  className="object-contain"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement | null;
                    if (t) t.src = "/movrr-ride-bob.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
