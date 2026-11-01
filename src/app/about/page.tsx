import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InteriorHero from "@/components/InteriorHero";
import SectionBgImage from "@/components/SectionBgImage";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import SchedulingForm from "@/components/SchedulingForm";
import JsonLd from "@/components/JsonLd";
import {
  CheckIcon,
  ShieldIcon,
  WrenchIcon,
  CogIcon,
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
    desc: "BMW-specific diagnostic computers, factory-level diagnostic software, and OEM service tools.",
  },
  {
    icon: CheckIcon,
    title: "Complete Safety Inspections",
    desc: "NH State Inspections have been paused, but your safety shouldn't be.",
  },
];

const credentials = [
  {
    title: "ASE-Certified Technician",
    desc: "Nationally recognized automotive service certification demonstrating technical knowledge and professional competence.",
  },
  {
    title: "BMW Factory-Trained Since 1992",
    desc: "Specialized training directly from BMW of North America, providing the foundation for decades of BMW expertise.",
  },
  {
    title: "14 Years in BMW Dealerships",
    desc: "Extensive hands-on experience diagnosing, maintaining, and repairing BMW vehicles in authorized dealerships.",
  },
  {
    title: "BMW Eastern Region Achievement Awards",
    desc: "Recognized by BMW of North America for outstanding performance and achievement in the Eastern Region.",
  },
  {
    title: "FAA-Certified Airframe & Powerplant Mechanic",
    desc: "Professionally trained and certified in aircraft maintenance, where precision, technical knowledge, and attention to detail are essential.",
  },
  {
    title: "FAA-Licensed Pilot",
    desc: "Aviation experience that reinforces Derek's commitment to safety, precision, and meticulous workmanship.",
  },
];

const derekBio = [
  "Derek's passion for BMWs began professionally in 1992 with training directly from BMW of North America. He went on to spend 14 years working in BMW dealerships, developing the specialized knowledge and hands-on experience that would eventually become the foundation of Precision BMW Repair.",
  "His commitment to precision extends beyond automobiles. As an FAA-certified Airframe & Powerplant mechanic and licensed pilot, Derek brings the same attention to detail, technical discipline, and high standards to BMW repair that are essential in aviation.",
  "Today, Derek offers something increasingly difficult to find: personalized BMW service from an experienced specialist who works directly with you. No unnecessary repairs, no upselling, and no dealership runaround. Just honest advice, quality workmanship, and a genuine commitment to keeping your BMW performing at its best.",
];

const differenceParagraphs = [
  "At Precision BMW Repair, our philosophy is simple: treat every customer honestly, every BMW with care, and every repair with the attention to detail it deserves.",
  "We believe you should understand what's happening with your vehicle, what needs attention now, and what can wait. Derek takes the time to explain his findings, answer your questions, and help you make informed decisions without pressure or unnecessary upselling.",
  "Whether your BMW needs routine maintenance, complex diagnostics, or major repairs, you'll receive the same commitment to quality workmanship, fair pricing, and personalized attention.",
  "Our goal isn't simply to repair your BMW. It's to earn your trust and become the specialist you confidently return to for years to come.",
];

const shopPhotos = [
  {
    src: "/images/shop/service-bays.webp",
    alt: "BMW service bays with two-post lifts at Precision BMW Repair in Brentwood NH",
  },
  {
    src: "/images/shop/tire-equipment.webp",
    alt: "BMW tire mounting and balancing equipment at Precision BMW Repair in Brentwood NH",
  },
  {
    src: "/images/shop/shop-exterior.webp",
    alt: "BMW Alpina B7 parked outside Precision BMW Repair at 25 Commercial Drive in Brentwood NH",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      <InteriorHero
        label="About Us"
        image="/images/heroes/about.webp"
        imageAlt="BMW service bays and lifts inside Precision BMW Repair in Brentwood NH"
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

          <div className="icon-grid icon-grid-2">
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

          <div className="photo-grid">
            {shopPhotos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={Math.min((i + 1) * 0.1, 0.5)}>
                <div className="photo-grid-item">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </ScrollReveal>
            ))}
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
                <span className="section-label">Meet the Owner &amp; Technician</span>
                <h2 className="section-headline">
                  Meet Derek — The Experience Behind Precision BMW
                </h2>
                <div style={{ marginBottom: "36px" }}>
                  {derekBio.map((text, i) => (
                    <p
                      key={i}
                      className="section-sub"
                      style={{ marginTop: i > 0 ? "16px" : undefined }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
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

      {/* ── THE PRECISION BMW DIFFERENCE ─────────────────────── */}
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
              label="The Precision BMW Difference"
              headline="Expert BMW Care. Honest Advice. Personal Service."
            />
            {differenceParagraphs.map((text, i) => (
              <p
                key={i}
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  fontSize: "clamp(15px, 2vw, 17px)",
                  marginTop: i > 0 ? "20px" : undefined,
                }}
              >
                {text}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section
        className="section section-with-bg"
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <SectionBgImage
          src="/images/shop/oem-parts-label.webp"
          alt="Factory BMW label warning against non-approved parts, on a BMW serviced at Precision BMW Repair in Brentwood NH"
        />
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <SectionHeader
              label="Precision BMW Repair"
              headline="Your BMW Deserves a Specialist Who Knows It."
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
              Experience the difference of working directly with a BMW-trained
              technician who takes pride in doing things right. From routine
              maintenance to complex repairs, Derek is here to help you keep your
              BMW running and driving the way it should.
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
