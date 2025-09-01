import { Button } from "@/components/ui/button";
import Image from "next/image";
import { track } from "@vercel/analytics";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/amsterdam-cityscape-canals-bikes.png"
          alt="Amsterdam cityscape with canals and bikes"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 100vw"
          quality={100}
          priority
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9SQ2TQ6y+WgZPJ7FeYqSmL//Z"
        />
      </div>

      {/* Gradient overlay */}
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
            onClick={() => {
              onJoinWaitlist();
              track("Sign Up Now Clicked");
            }}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
}
