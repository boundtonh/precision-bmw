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
  title: "BMW Performance Services — Southern NH | Precision BMW Repair",
  description:
    "BMW ECU tuning, performance upgrades, and advanced diagnostics. Expert installation and calibration by a dealer-trained technician in Southern NH.",
  alternates: {
    canonical: "https://www.bmwrepairnh.com/services/performance",
  },
  openGraph: {
    title: "BMW Performance Services — Southern NH | Precision BMW Repair",
    url: "https://www.bmwrepairnh.com/services/performance",
  },
};

const performanceServices = services.filter(
  (s) => s.category === "performance"
);

const trustPoints = [
  "Baseline diagnostics before any modification — no blind tuning",
  "ECU calibration via Bootmod3, MHD, and other trusted platforms",
  "Post-installation data logging and calibration verification",
  "30+ years of exclusive BMW powertrain knowledge",
];

export default function PerformancePage() {
  return (
    <>
      <InteriorHero
        label="Performance"
        h1="BMW Performance Services in Southern NH"
        description="Precision-tuned performance upgrades and diagnostics for BMW drivers who demand more from their vehicle."
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
              label="Performance"
              headline="BMW Performance Upgrades"
              subheadline="Every performance job starts with a diagnostic baseline and ends with verified calibration data."
            />
          </ScrollReveal>

          <div className="service-grid">
            {performanceServices.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.1}>
                <ServiceCard
                  name={svc.name}
                  slug={svc.slug}
                  url={svc.url}
                  category={svc.category}
                  shortDescription={svc.shortDescription}
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
                BMW Performance for All Models &amp; Series
              </h2>
              <p className="section-sub">
                Derek&rsquo;s background in aviation mechanics (A&P certified, FAA
                pilot&rsquo;s license) means performance modifications are approached
                with the same methodical precision applied to aircraft. No guessing,
                no assumptions — everything is measured, logged, and verified.
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
