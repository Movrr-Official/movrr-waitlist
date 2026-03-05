import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "./forms/waitlist-form";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";

interface WaitlistSectionProps {
  copy: Dictionary["waitlistSection"];
  formCopy: Dictionary["waitlistForm"];
  locale: Locale;
}

export function WaitlistSection({
  copy,
  formCopy,
  locale,
}: WaitlistSectionProps) {
  return (
    <section id="signup" className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            {copy.titleLines[0]}
            <br />
            <span className="text-secondary">{copy.titleLines[1]}</span>
          </h2>
          <p className="text-xl text-white/90 mb-12">{copy.subtitle}</p>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-12">
              <WaitlistForm copy={formCopy} locale={locale} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
