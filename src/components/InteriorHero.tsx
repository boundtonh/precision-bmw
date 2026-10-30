import Link from "next/link";
import Image from "next/image";

interface InteriorHeroProps {
  label: string;
  h1: string;
  description?: string;
  showCta?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export default function InteriorHero({
  label,
  h1,
  description,
  showCta = false,
  image,
  imageAlt = "",
  imagePosition = "center",
}: InteriorHeroProps) {
  return (
    <section className={image ? "interior-hero has-image" : "interior-hero"}>
      <div className="interior-hero-bg">
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: imagePosition }}
          />
        )}
      </div>
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
