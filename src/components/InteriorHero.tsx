import Link from "next/link";

interface InteriorHeroProps {
  label: string;
  h1: string;
  description?: string;
  showCta?: boolean;
}

export default function InteriorHero({
  label,
  h1,
  description,
  showCta = false,
}: InteriorHeroProps) {
  return (
    <section className="interior-hero">
      <div className="interior-hero-bg" />
      <div className="interior-hero-overlay" />
      <div className="container interior-hero-content">
        <span className="interior-hero-label">{label}</span>
        <h1>{h1}</h1>
        {description && (
          <p className="interior-hero-desc">{description}</p>
        )}
        {showCta && (
          <Link href="/schedule" className="btn-primary">
            Schedule Service
          </Link>
        )}
      </div>
    </section>
  );
}
