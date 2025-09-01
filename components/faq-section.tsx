"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I get started with Movrr?",
    answer:
      "Join our pre-launch waitlist to be among the first riders when we launch. Once live, you'll download our app, complete a quick verification process, and start earning within 24 hours.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Riders typically earn €15-30 per hour, with additional bonuses for peak hours and high-traffic routes. Your earnings depend on ride frequency, route popularity, and campaign participation.",
  },
  {
    question: "Do I need my own bike?",
    answer:
      "Yes, you'll need a reliable bike to participate. We provide all advertising equipment and gear. Electric bikes are welcome and often earn higher rates due to extended range capabilities.",
  },
  {
    question: "What cities are you launching in?",
    answer:
      "We're starting with Rotterdam and expanding to other major cities in the Netherlands. Join the waitlist to be notified when we launch in your city.",
  },
  {
    question: "How flexible are the hours?",
    answer:
      "Completely flexible. Ride when you want, where you want. Many riders work around their schedule - before work, during lunch breaks, or on weekends. You're in complete control.",
  },
  {
    question: "What kind of advertising will I display?",
    answer:
      "We partner with premium brands for tasteful, lightweight advertising displays. All campaigns are pre-approved and align with our community values. You'll always know what you're promoting.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "No minimum hours or commitment required. Ride as little or as much as you want. Some riders participate daily, others just on weekends - it's entirely up to you.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Monthly payouts directly to your bank account or digital wallet. Track your earnings in real-time through our app and get detailed breakdowns of all your rides and bonuses.",
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
