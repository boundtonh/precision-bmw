import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faq";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import SchedulingForm from "@/components/SchedulingForm";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "./FaqAccordion";

export const revalidate = false;

export const metadata: Metadata = {
  title: "BMW Repair FAQ | Precision BMW Repair — Brentwood NH",
  description:
    "Answers to common questions about BMW repair and service at Precision BMW Repair. OEM parts, dealer-trained technician, warranty on all work.",
  alternates: { canonical: "https://www.bmwrepairnh.com/faq" },
  openGraph: {
    title: "BMW Repair FAQ | Precision BMW Repair — Brentwood NH",
    url: "https://www.bmwrepairnh.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <InteriorHero
        label="FAQ"
        h1="BMW Repair Questions — Precision BMW Repair"
        description="Common questions from BMW owners about our services, parts, and process."
      />

      <section
        className="section"
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <ScrollReveal>
            <SectionHeader
              label="Frequently Asked Questions"
              headline="What BMW Owners Want to Know"
              subheadline="Can't find your answer? Call or text us at 603-679-3883."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FaqAccordion />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              style={{
                marginTop: "48px",
                padding: "32px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "6px",
                  }}
                >
                  Still Have Questions?
                </p>
                <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>
                  Call or text Derek directly at{" "}
                  <a
                    href="tel:6036793883"
                    style={{ color: "var(--color-accent)" }}
                  >
                    603-679-3883
                  </a>
                </p>
              </div>
              <Link href="/schedule" className="btn-primary">
                Schedule Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SchedulingForm />
    </>
  );
}
