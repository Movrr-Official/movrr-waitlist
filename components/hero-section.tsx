import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics";
import Image from "next/image";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src="/amsterdam-cityscape-canals-bikes.png"
          alt="Amsterdam cityscape with canals and bikes"
          fill
          priority
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9SQ2TQ6y+WgZPJ7FeYqSmL//Z"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-transparent"></div>

      {/* Logo at the top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-1">
          <img
            src="/movrr-icon.png"
            alt="Movrr Icon"
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <h3 className="text-2xl md:text-3xl font-black text-white">MOVRR</h3>
        </div>
      </div>

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
            Whether you’re a student, delivery rider, or just cruising through
            the city, Movrr pays you for every ride. No shifts, no deliveries,
            just extra cash on your own terms.
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
