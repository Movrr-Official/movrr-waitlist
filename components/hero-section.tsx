import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/amsterdam-cityscape-canals-bikes.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent"></div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tight">
            JOIN THE
            <br />
            <span className="text-primary">MOVEMENT</span>
            <br />
            TRANSFORM
            <br />
            YOUR RIDE
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Turn every bike ride into income. Transform city streets into your
            canvas.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-xl font-bold rounded-3xl uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-200"
            onClick={onJoinWaitlist}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
}
