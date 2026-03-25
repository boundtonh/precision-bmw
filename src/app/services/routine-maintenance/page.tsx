import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import SchedulingForm from "@/components/SchedulingForm";
import { CheckIcon } from "@/components/Icons";

export const revalidate = false;

export const metadata: Metadata = {
  title:
    "BMW Routine Maintenance — Southern NH | Precision BMW Repair",
  description:
    "BMW oil changes, tire balancing, tune-ups, and safety inspections by a dealer-trained technician. OEM parts only. Serving Southern NH from Brentwood.",
  alternates: {
    canonical: "https://www.bmwrepairnh.com/services/routine-maintenance",
  },
  openGraph: {
    title: "BMW Routine Maintenance — Southern NH | Precision BMW Repair",
    url: "https://www.bmwrepairnh.com/services/routine-maintenance",
  },
};

const routineServices = services.filter(
  (s) => s.category === "routine-maintenance"
);

const trustPoints = [
  "BMW-specified oils and fluids — never generic substitutes",
  "Condition-Based Service (CBS) reset on every applicable service",
  "All work backed by warranty on parts and labor",
  "NH and ME state inspection stickers available",
];

export default function RoutineMaintenancePage() {
  return (
    <>
      <InteriorHero
        label="Routine Maintenance"
        h1="BMW Routine Maintenance in Southern NH"
        description="Keep your BMW running at peak performance with scheduled maintenance from a dealer-trained technician who works exclusively on BMWs."
        showCta
      />

      {/* Service Cards */}
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
              label="Routine Maintenance"
              headline="BMW Maintenance Services"
              subheadline="Every service performed to BMW factory specification with genuine OEM parts."
            />
          </ScrollReveal>

          <div className="service-grid">
            {routineServices.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.1}>
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
                Dealer-Trained BMW Technician in Brentwood NH
              </h2>
              <p className="section-sub">
                Derek has been maintaining BMWs since 1992 — trained directly by BMW
                of North America. Every maintenance interval is performed to BMW
                factory specification with genuine OEM parts. No aftermarket
                substitutes, no shortcuts.
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
