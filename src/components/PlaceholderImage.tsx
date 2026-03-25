interface PlaceholderImageProps {
  variant?: "default" | "person" | "dark";
  className?: string;
  style?: React.CSSProperties;
}

export default function PlaceholderImage({
  variant = "default",
  className,
  style,
}: PlaceholderImageProps) {
  const patterns: Record<string, string> = {
    default:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 16px)",
    person:
      "radial-gradient(ellipse at 50% 35%, #2a2a2a 28%, transparent 29%), radial-gradient(ellipse at 50% 80%, #242424 55%, transparent 56%)",
    dark: "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 24px)",
  };

  const bgColors: Record<string, string> = {
    default: "#141414",
    person: "#1a1a1a",
    dark: "#0f0f0f",
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: bgColors[variant],
        backgroundImage: patterns[variant],
        width: "100%",
        height: "100%",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
