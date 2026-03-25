import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getServiceContent,
  getServicesByCategory,
} from "@/data/serviceContent";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import SchedulingForm from "@/components/SchedulingForm";
import JsonLd from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";

export const revalidate = false;

export function generateStaticParams() {
  return getServicesByCategory("bmw-repair").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent("bmw-repair", slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.bmwrepairnh.com/services/bmw-repair/${slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.bmwrepairnh.com/services/bmw-repair/${slug}`,
    },
  };
}

export default async function BmwRepairServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getServiceContent("bmw-repair", slug);
  if (!content) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.h1,
    description: content.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: "Precision BMW Repair",
      telephone: "+16036793883",
      address: {
        "@type": "PostalAddress",
        streetAddress: "25 Commercial Drive, Door 1A",
        addressLocality: "Brentwood",
        addressRegion: "NH",
        postalCode: "03833",
      },
    },
    areaServed: "Southern New Hampshire",
    serviceType: content.h1,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <InteriorHero
        label="BMW Repair"
        h1={content.h1}
        description={content.heroDescription}
        showCta
      />

      {/* What's Included */}
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
              label="Service Details"
              headline="What's Included"
              subheadline={`Every ${content.h1} at Precision BMW Repair covers the following.`}
            />
          </ScrollReveal>

          <div className="included-grid">
            {content.included.map((item, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.4)}>
                <div className="included-item">
                  <CheckIcon size={16} className="included-item-icon" />
                  <p className="included-item-text">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Precision BMW */}
      <section
        className="section"
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <ScrollReveal>
            <SectionHeader
              label="Why Precision BMW"
              headline="Genuine OEM BMW Parts — No Aftermarket"
            />
            <div className="trust-card">
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                }}
              >
                {content.whyParagraph}
              </p>
              <div style={{ marginTop: "24px" }}>
                <Link href="/schedule" className="btn-primary">
                  Schedule This Service
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ReviewsCarousel />
      <SchedulingForm />
    </>
  );
}
