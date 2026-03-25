interface SectionHeaderProps {
  label: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  headline,
  subheadline,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: "48px" }}>
      <span className="section-label">{label}</span>
      <h2 className="section-headline">{headline}</h2>
      {subheadline && (
        <p
          className="section-sub"
          style={{ margin: centered ? "0 auto" : undefined }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
