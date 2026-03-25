import type { Metadata } from "next";
import { services } from "@/data/services";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import SchedulingForm from "@/components/SchedulingForm";
import { CheckIcon } from "@/components/Icons";

export const revalidate = false;

export const metadata: Metadata = {
  title: "BMW Repair Services — Southern NH | Precision BMW Repair",
  description:
    "Expert BMW repair using factory ISTA+ diagnostics, OEM parts, and a dealer-trained technician. Brakes, transmission, electrical, alignment, and more. Southern NH.",
  alternates: {
    canonical: "https://www.bmwrepairnh.com/services/bmw-repair",
  },
  openGraph: {
    title: "BMW Repair Services — Southern NH | Precision BMW Repair",
    url: "https://www.bmwrepairnh.com/services/bmw-repair",
  },
};

const repairServices = services.filter((s) => s.category === "bmw-repair");

const trustPoints = [
  "Factory ISTA+ diagnostic software — not generic OBD-II tools",
  "OEM BMW parts only — no aftermarket substitutes",
  "Accurate diagnosis before any parts are ordered",
  "Warranty on all parts and labor",
];

export default function BmwRepairPage() {
  return (
    <>
      <InteriorHero
        label="BMW Repair"
        h1="BMW Repair Services in Southern NH"
        description="Expert BMW repair using factory-level diagnostics, OEM parts, and dealer-trained expertise. From brake service to transmission repair."
        showCta
      />

      <section
        className="section"
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="BMW Repair"
              headline="Full-Service BMW Repair"
              subheadline="Every repair starts with an accurate ISTA+ diagnosis. We fix the problem — not the symptoms."
            />
          </ScrollReveal>

          <div className="service-grid">
            {repairServices.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={Math.min(i * 0.08, 0.5)}>
                <ServiceCard
                  name={svc.name}
                  slug={svc.slug}
                  url={svc.url}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="section"
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 64px)",
              alignItems: "center",
            }}
            className="trust-two-col"
          >
            <ScrollReveal>
              <span className="section-label">Why Precision BMW</span>
              <h2 className="section-headline">
                Trusted by BMW Owners Across Southern NH
              </h2>
              <p className="section-sub">
                BMW repair requires BMW-specific knowledge. Derek uses the same ISTA+
                software and genuine parts as BMW dealerships — with 30+ years of
                exclusive BMW expertise that most dealers cannot match. Serving BMW
                owners in Brentwood, Exeter, Portsmouth, Manchester, and all of
                Southern NH.
              </p>
            </ScrollReveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {trustPoints.map((point, i) => (
                <ScrollReveal key={point} delay={i * 0.1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "16px 20px",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  >
                    <CheckIcon
                      size={16}
                      style={{
                        color: "var(--color-accent)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span style={{ fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.6 }}>
                      {point}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SchedulingForm />

      <style>{`
        @media (max-width: 768px) {
          .trust-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
