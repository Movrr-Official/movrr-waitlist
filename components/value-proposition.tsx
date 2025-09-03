import { Bike } from "lucide-react";

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
                    Earn up to €15–30/hour, fair and transparent payouts
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
                    Monthly payouts, always on time with no hidden fees
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Bike className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
