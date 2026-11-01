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
import {
  WarningSigns,
  ServiceDetails,
  WhyParagraphs,
} from "@/components/ServiceSections";

export const revalidate = false;

export function generateStaticParams() {
  return getServicesByCategory("performance").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent("performance", slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.bmwrepairnh.com/services/performance/${slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.bmwrepairnh.com/services/performance/${slug}`,
    },
  };
}

export default async function PerformanceServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getServiceContent("performance", slug);
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
        label={content.heroLabel ?? "Performance"}
        image={`/images/services/${slug}.webp`}
        imageAlt={`${content.h1} at Precision BMW Repair in Brentwood NH`}
        h1={content.h1}
        description={content.heroDescription}
        showCta
      />

      <WarningSigns content={content} />
      <ServiceDetails content={content} />

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
              headline={content.whyHeadline ?? "Precision Meets Performance"}
            />
            <div className="trust-card">
              <WhyParagraphs content={content} />
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
