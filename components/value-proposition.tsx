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
                <span className="text-primary">CONNECT.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every pedal stroke is a step toward financial freedom. Turn your
                daily commute into your daily income.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    €15-30 per hour guaranteed
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    Flexible schedule, your rules
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-lg font-medium">
                    Monthly payouts, no delays
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
