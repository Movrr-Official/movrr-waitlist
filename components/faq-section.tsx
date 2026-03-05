"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/locales/en";

interface FAQSectionProps {
  copy: Dictionary["faq"];
}

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
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection({ copy }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
            {copy.titleLines[0]}
            <br />
            <span className="text-primary">{copy.titleLines[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {copy.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {copy.items.map((faq, index) => (
            <FAQItem
              key={faq.question}
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

