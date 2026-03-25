"use client";
import { useState } from "react";
import { faqs } from "@/data/faq";
import { ChevronDownIcon } from "@/components/Icons";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "1px solid var(--color-border)" }}>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-trigger"
            aria-expanded={openIndex === i}
            aria-controls={`faq-body-${i}`}
            id={`faq-trigger-${i}`}
            onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
          >
            {faq.question}
            <ChevronDownIcon
              size={20}
              className={`faq-chevron${openIndex === i ? " open" : ""}`}
            />
          </button>
          <div
            id={`faq-body-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
            className={`faq-body${openIndex === i ? " open" : ""}`}
          >
            <p className="faq-body-text">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
