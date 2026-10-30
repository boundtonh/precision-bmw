import Image from "next/image";

interface SectionBgImageProps {
  src: string;
  alt: string;
  position?: string;
}

// Full-bleed background photo with a dark overlay. Parent section needs the "section-with-bg" class.
export default function SectionBgImage({ src, alt, position = "center" }: SectionBgImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="section-bg-image"
        style={{ objectFit: "cover", objectPosition: position }}
      />
      <div className="section-bg-overlay" aria-hidden="true" />
    </>
  );
}
