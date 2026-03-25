import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import SchedulingForm from "@/components/SchedulingForm";
import JsonLd from "@/components/JsonLd";
import {
  CheckIcon,
  AwardIcon,
  ShieldIcon,
  WrenchIcon,
  CogIcon,
  UserIcon,
} from "@/components/Icons";

export const revalidate = false;

export const metadata: Metadata = {
  title:
    "About Precision BMW Repair | BMW Master Technician — Southern NH",
  description:
    "Meet Derek, BMW-trained technician since 1992 with 14 years of BMW dealership experience. Precision BMW Repair in Brentwood, NH — OEM parts, dealer-level tools, warranty on all work.",
  alternates: { canonical: "https://www.bmwrepairnh.com/about" },
  openGraph: {
    title: "About Precision BMW Repair | BMW Master Technician — Southern NH",
    url: "https://www.bmwrepairnh.com/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Derek",
  jobTitle: "Lead BMW Technician & Owner",
  worksFor: {
    "@type": "AutoRepair",
    name: "Precision BMW Repair",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Commercial Drive, Door 1A",
      addressLocality: "Brentwood",
      addressRegion: "NH",
      postalCode: "03833",
    },
  },
  hasCredential: [
    "ASE-Certified Technician",
    "BMW of North America Trained",
    "Airframe and Powerplant (A&P) Certification",
    "FAA Pilot's License",
  ],
};

const shopFeatures = [
  {
    icon: WrenchIcon,
    title: "BMW-Exclusive Shop",
    desc: "We only work on BMWs. Every tool, every procedure, every part is specific to your vehicle.",
  },
  {
    icon: ShieldIcon,
    title: "OEM Parts Only",
    desc: "Genuine BMW parts on every job. No aftermarket alternatives, no exceptions.",
  },
  {
    icon: CogIcon,
    title: "Dealer-Level Equipment",
    desc: "BMW-specific diagnostic computers, factory ISTA+ software, and OEM service tools.",
  },
  {
    icon: AwardIcon,
    title: "Warranty on All Work",
    desc: "Every repair and maintenance service is backed by our warranty on parts and labor.",
  },
  {
    icon: UserIcon,
    title: "You Work With the Owner",
    desc: "Direct communication with Derek on every visit. No service writers, no runaround.",
  },
  {
    icon: CheckIcon,
    title: "NH & ME State Inspections",
    desc: "Licensed to perform New Hampshire and Maine state inspection stickers.",
  },
];

const credentials = [
  {
    title: "ASE-Certified Technician",
    desc: "Nationally recognized certification for automotive service excellence.",
  },
  {
    title: "BMW-Trained Since 1992",
    desc: "Direct training from BMW of North America — the same training as dealer technicians.",
  },
  {
    title: "14 Years in BMW Dealerships",
    desc: "More than a decade working exclusively in BMW franchise dealerships before opening Precision BMW.",
  },
  {
    title: "Eastern Region Achievement Awards",
    desc: "Earned prestigious BMW of North America performance awards in the Eastern Region.",
  },
  {
    title: "Airframe & Powerplant (A&P) Certified",
    desc: "FAA-recognized certification for aircraft engine and airframe maintenance from East Coast Aero Tech.",
  },
  {
    title: "FAA Pilot's License",
    desc: "Holds a pilot's license — the same precision applied to aircraft carries over to every BMW job.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      <InteriorHero
        label="About Us"
        h1="BMW Master Technician Serving Southern NH"
        description="Precision BMW Repair was built on one principle: BMW owners deserve the same expertise and equipment as a dealership, without the dealership overhead."
      />

      {/* ── SHOP INTRO ───────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Our Shop"
              headline="Dealer-Level BMW Service Without Dealer Prices"
              subheadline="Precision BMW Repair is a full-service repair and maintenance facility dedicated exclusively to BMW vehicles. Every piece of equipment, every diagnostic tool, and every part is BMW-specific."
            />
          </ScrollReveal>

          <div className="icon-grid">
            {shopFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={Math.min(i * 0.1, 0.5)}>
                  <div className="credential-item">
                    <Icon size={24} className="credential-icon" />
                    <div>
                      <p className="credential-title">{feature.title}</p>
                      <p className="credential-desc">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MEET DEREK ───────────────────────────────────────── */}
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
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="derek-grid"
          >
            {/* Photo */}
            <ScrollReveal>
              <div style={{ maxWidth: "405px", margin: "0 auto" }}>
                <div
                  style={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    aspectRatio: "405 / 605",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/team/Derek Stehoscope.avif"
                    alt="Derek, lead BMW technician and owner of Precision BMW Repair in Brentwood NH"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="405px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="section-label">Meet the Technician</span>
                <h2 className="section-headline">
                  Derek — Lead Technician &amp; Owner
                </h2>
                <p className="section-sub" style={{ marginBottom: "36px" }}>
                  Derek&rsquo;s relationship with BMW began in 1992 when he received
                  direct training from BMW of North America. What followed was 14
                  years in BMW dealerships and a list of credentials that spans from
                  automotive service to aviation mechanics. His precision extends from
                  BMW engines to aircraft — the same meticulous standard applied to both.
                </p>
              </ScrollReveal>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {credentials.map((cred, i) => (
                  <ScrollReveal key={cred.title} delay={0.1 + i * 0.08}>
                    <div
                      style={{
                        padding: "16px 20px",
                        background: "var(--color-bg)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "4px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#fff",
                          marginBottom: "4px",
                        }}
                      >
                        {cred.title}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--color-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {cred.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ──────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <SectionHeader
              label="Our Promise"
              headline="Genuine OEM BMW Parts — No Aftermarket"
              centered
            />
            <p
              style={{
                textAlign: "center",
                color: "var(--color-muted)",
                lineHeight: 1.8,
                fontSize: "clamp(15px, 2vw, 17px)",
                marginBottom: "40px",
              }}
            >
              When you bring your BMW to Precision BMW Repair, you are working
              directly with the owner — a BMW-trained technician with over 30 years of
              experience. Every part installed is a genuine OEM BMW part. Every repair
              is backed by our warranty. Every interaction is direct, honest, and
              technically precise. No service writers. No guessing. No shortcuts.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/schedule" className="btn-primary">
                Schedule Your Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SchedulingForm />

      <style>{`
        @media (max-width: 768px) {
          .derek-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
