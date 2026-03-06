"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dictionary } from "@/locales/en";

interface FAQSectionProps {
  copy: Dictionary["faq"];
}

export function FAQSection({ copy }: FAQSectionProps) {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          {copy.heading.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.heading.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-4xl font-black leading-tight text-secondary md:text-6xl">
            {copy.heading.title}
          </h2>
          {copy.heading.subtitle ? (
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {copy.heading.subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-14 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {copy.items.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-7 text-left text-lg font-bold text-secondary hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-base leading-7 text-muted-foreground md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
