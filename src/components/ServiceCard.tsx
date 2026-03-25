import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { getServiceIcon, ChevronRightIcon } from "./Icons";
import { ServiceCategory } from "@/data/services";

interface ServiceCardProps {
  name: string;
  slug: string;
  url: string;
  category: ServiceCategory;
  shortDescription: string;
}

const categoryConfig: Record<ServiceCategory, { color: string; label: string }> = {
  "routine-maintenance": { color: "#2A9D4E", label: "Maintenance" },
  "bmw-repair":          { color: "#1C69D4", label: "Repair" },
  "performance":         { color: "#C0392B", label: "Performance" },
};

export default function ServiceCard({ name, slug, url, category, shortDescription }: ServiceCardProps) {
  const Icon = getServiceIcon(slug);
  const { color, label } = categoryConfig[category];

  return (
    <Link
      href={url}
      className="service-card"
      data-category={category}
      aria-label={name}
      style={{ borderTopColor: color, borderTopWidth: "3px" }}
    >
      <div className="service-card-bg">
        <PlaceholderImage variant="dark" />
      </div>
      <div className="service-card-overlay" />
      <div className="service-card-content">
        <Icon size={20} style={{ color, flexShrink: 0 }} />
        <div>
          <span className="service-card-name">{name}</span>
          <p className="service-card-desc">{shortDescription}</p>
          <span className="service-card-link">
            View Service <ChevronRightIcon size={12} />
          </span>
        </div>
      </div>
      {/* Category badge */}
      <span
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color,
          background: `${color}18`,
          border: `1px solid ${color}40`,
          borderRadius: "3px",
          padding: "3px 8px",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </Link>
  );
}
