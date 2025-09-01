import { Zap, Target, Trophy } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-tight">
            UNLEASH YOUR
            <br />
            <span className="text-primary">POTENTIAL</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Every ride is an opportunity. Every street is your stage. Every mile
            brings you closer to financial freedom.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wide">
                Flexible
              </h3>
              <p className="text-muted-foreground">
                Ride when you want. Where you want. How you want.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wide">
                Reliable
              </h3>
              <p className="text-muted-foreground">
                Guaranteed Monthly payouts. Performance bonuses. No surprises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wide">
                Rewarding
              </h3>
              <p className="text-muted-foreground">
                Join a community of riders making cities more vibrant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
