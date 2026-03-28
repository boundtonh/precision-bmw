import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { getServiceIcon, CheckIcon, StarIcon } from "@/components/Icons";
import ServiceCard from "@/components/ServiceCard";
import SchedulingForm from "@/components/SchedulingForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import JsonLd from "@/components/JsonLd";
import HeroReady from "@/components/HeroReady";

export const revalidate = false;

export const metadata: Metadata = {
  title: "BMW Repair & Service in Southern NH | Precision BMW Repair",
  description:
    "Precision BMW Repair — dealer-trained BMW technician serving Brentwood, Exeter, Portsmouth, and Southern NH since 1992. OEM parts, warranty on all work.",
  alternates: {
    canonical: "https://www.bmwrepairnh.com/",
  },
  openGraph: {
    title: "BMW Repair & Service in Southern NH | Precision BMW Repair",
    description:
      "Dealer-trained BMW expertise. OEM parts. BMW-exclusive since 1992. Serving Southern NH and Northern MA.",
    url: "https://www.bmwrepairnh.com/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Precision BMW Repair",
  image: "https://www.bmwrepairnh.com/og-image.jpg",
  url: "https://www.bmwrepairnh.com",
  telephone: "+16036793883",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Commercial Drive, Door 1A",
    addressLocality: "Brentwood",
    addressRegion: "NH",
    postalCode: "03833",
    addressCountry: "US",
  },
  openingHours: ["Mo-Th 10:00-18:00", "Fr 10:00-17:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
  priceRange: "$$",
  description:
    "BMW-exclusive repair and maintenance facility in Brentwood, NH. Dealer-trained technician since 1992, OEM parts only, warranty on all work.",
};

const routineServices = services.filter(
  (s) => s.category === "routine-maintenance"
);
const repairServices = services.filter((s) => s.category === "bmw-repair");
const performanceServices = services.filter(
  (s) => s.category === "performance"
);

const trustItems = [
  "4.8 Stars · 50+ Google Reviews",
  "BMW-Exclusive Since 1992",
  "OEM Parts Only",
  "Warranty on All Work",
];

const aboutBullets = [
  "BMW-exclusive shop — we only work on BMWs, nothing else",
  "Trained directly by BMW of North America since 1992",
  "Genuine OEM parts only — no aftermarket, ever",
  "Warranty on all parts and labor",
];

const categories = [
  {
    key: "routine-maintenance",
    label: "Routine Maintenance",
    href: "/services/routine-maintenance",
    desc: "Oil changes, tire balancing, tune-ups, and safety inspections — done to BMW specification.",
    count: 4,
  },
  {
    key: "bmw-repair",
    label: "BMW Repair",
    href: "/services/bmw-repair",
    desc: "Full-service BMW repair with factory diagnostics, OEM parts, and dealer-trained expertise.",
    count: 7,
  },
  {
    key: "performance",
    label: "Performance",
    href: "/services/performance",
    desc: "ECU tuning, performance upgrades, and advanced diagnostics for BMW enthusiasts.",
    count: 2,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(600px, 100vh, 1080px)",
          display: "flex",
          alignItems: "center",
          padding: "96px 0",
          overflow: "hidden",
        }}
      >
        <HeroReady />
        {/* Background */}
        <div
          className="hero-bg-animate"
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src="/images/hero/hero-image.jpg"
            alt="BMW repair shop at Precision BMW Repair in Brentwood NH"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Overlay */}
        <div
          className="hero-overlay-animate"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.55) 100%)",
          }}
        />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Trust bar */}
          <div
            className="hero-trustbar-animate"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 24px",
              marginBottom: "32px",
            }}
          >
            {trustItems.map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                }}
              >
                <StarIcon
                  size={11}
                  style={{ color: "var(--color-accent)", fill: "var(--color-accent)" }}
                />
                {item}
              </span>
            ))}
          </div>

          {/* H1 */}
          <h1
            className="hero-h1-animate"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              maxWidth: "820px",
              marginBottom: "24px",
            }}
          >
            BMW Repair &amp; Service in Southern NH
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub-animate"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 400,
              color: "var(--color-muted)",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Dealer-trained expertise. OEM parts. BMW-exclusive since 1992.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas-animate"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Link href="/schedule" className="btn-primary">
              Schedule Service
            </Link>
            <Link href="/services/bmw-repair" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ─────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Photo placeholder */}
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
              <ScrollReveal delay={0.1}>
                <span className="section-label">About Precision BMW</span>
                <h2 className="section-headline">
                  Southern NH&rsquo;s BMW Specialist
                </h2>
                <p className="section-sub" style={{ marginBottom: "32px" }}>
                  Derek has been working exclusively on BMWs since 1992, trained
                  directly by BMW of North America. 14 years of BMW dealership
                  experience. Dealer-level tools, factory software, genuine OEM
                  parts — without the dealer overhead.
                </p>
              </ScrollReveal>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginBottom: "36px",
                }}
              >
                {aboutBullets.map((bullet, i) => (
                  <ScrollReveal key={bullet} delay={0.1 + i * 0.1}>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "14px",
                        color: "var(--color-muted)",
                        lineHeight: 1.6,
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
                      {bullet}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <ScrollReveal delay={0.5}>
                <Link href="/about" className="btn-secondary">
                  Learn More About Derek
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              label="Our Services"
              headline="Complete BMW Care in One Shop"
              subheadline="From routine oil changes to advanced performance upgrades — every service performed to BMW factory specification."
            />
          </ScrollReveal>

          {/* Category cards */}
          <div className="category-grid">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.key} delay={i * 0.1}>
                <Link href={cat.href} className="category-card">
                  <p className="category-card-label">{cat.label}</p>
                  <h3 className="category-card-title">{cat.label}</h3>
                  <p className="category-card-desc">{cat.desc}</p>
                  <span className="category-card-count">
                    {cat.count} services →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Service cards grid */}
          <ScrollReveal>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "20px",
              }}
            >
              All Services
            </h3>
          </ScrollReveal>
          <div className="service-grid">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={Math.min(i * 0.05, 0.5)}>
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

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── SCHEDULING FORM ───────────────────────────────────── */}
      <SchedulingForm />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .category-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .category-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
