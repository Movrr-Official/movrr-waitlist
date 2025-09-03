"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I get started with Movrr?",
    answer:
      "Join our pre-launch waitlist today. Once Movrr officially launches in your city, we’ll notify you with instructions on how to join and start riding.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Riders will typically earn €15–30 per hour, with extra bonuses during peak times and high-demand routes. Final rates may vary slightly at launch, but you’ll always earn fair, transparent payouts.",
  },
  {
    question: "Do I need my own bike?",
    answer:
      "Yes, you’ll need a reliable bike to get started. We provide all advertising equipment and gear. Electric bikes are welcome and often earn higher rates thanks to their extended range.",
  },
  {
    question: "What cities are you launching in?",
    answer:
      "We’re starting in Rotterdam and will expand to other major cities across the Netherlands soon. Join the waitlist to be the first to know when Movrr launches in your area.",
  },
  {
    question: "How flexible are the hours?",
    answer:
      "Completely flexible. Ride when you want, where you want. Many future riders plan to fit Movrr around their schedule, before class, during lunch, or on weekends. You’ll always be in control.",
  },
  {
    question: "What kind of advertising will I display?",
    answer:
      "Only premium, pre-approved brands that align with our community values. No spammy ads or shady sponsors, you’ll always know what you’re promoting and be proud to represent it.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Zero. No minimum hours or quotas. Whether you want a side hustle or steady income stream, you’ll ride as much or as little as you want.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Once Movrr launches, payouts will be sent directly to your bank account or digital wallet. You’ll also get transparent earnings breakdowns via the Movrr app so you always know what you’ve earned.",
  },
  {
    question: "Can I use Movrr while working for delivery apps?",
    answer:
      "Yes. Many riders plan to use Movrr alongside apps like Thuisbezorgd, UberEats, or Flink. You’ll keep 100% of your delivery earnings while earning extra from Movrr campaigns at the same time.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No experience needed. If you can ride a bike confidently and safely, you’re ready. We’ll provide everything you need to get started once Movrr launches.",
  },
  {
    question: "When will the Movrr app be available?",
    answer:
      "The Movrr mobile app is currently in development. Signing up for the pre-launch waitlist ensures you’ll be notified as soon as the app launches in your city, so you can start riding right away.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full py-8 px-0 text-left flex items-center justify-between group hover:text-primary transition-colors duration-300"
      >
        <h3 className="text-xl md:text-2xl font-bold text-balance group-hover:text-primary transition-colors duration-300">
          {question}
        </h3>
        <div className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-primary" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
          )}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-96 pb-8" : "max-h-0"
        )}
      >
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
            QUESTIONS?
            <br />
            <span className="text-primary">WE'VE GOT ANSWERS.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Everything you need to know about joining the movement
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
