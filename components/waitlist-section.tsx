import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section id="signup" className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            READY TO
            <br />
            <span className="text-secondary">START EARNING?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join the pre-launch. Be among the first riders in your city.
          </p>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-12">
              <WaitlistForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
