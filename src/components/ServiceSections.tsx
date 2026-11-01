import type { ServicePageContent } from "@/data/serviceContent";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { CheckIcon, AlertIcon } from "./Icons";

// Shared sections for the service detail pages ([slug] routes)

export function WarningSigns({ content }: { content: ServicePageContent }) {
  const signs = content.warningSigns;
  if (!signs) return null;
  return (
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
            label="Know the Warning Signs"
            headline={signs.headline}
            subheadline={signs.intro}
          />
        </ScrollReveal>

        <div className="included-grid">
          {signs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={Math.min(i * 0.08, 0.4)}>
              <div className="included-item included-item-bg">
                <AlertIcon size={16} className="included-item-icon" />
                <div>
                  <h3 className="included-item-title">{item.title}</h3>
                  <p className="included-item-text">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="section-sub service-note">{signs.outro}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ServiceDetails({ content }: { content: ServicePageContent }) {
  return (
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
            label={content.detailsLabel ?? "Service Details"}
            headline={content.detailsHeadline ?? "What's Included"}
            subheadline={
              content.detailsIntro ??
              `Every ${content.h1} at Precision BMW Repair covers the following.`
            }
          />
        </ScrollReveal>

        <div className="included-grid">
          {content.included.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.4)}>
              <div className="included-item">
                <CheckIcon size={16} className="included-item-icon" />
                {typeof item === "string" ? (
                  <p className="included-item-text">{item}</p>
                ) : (
                  <div>
                    <h3 className="included-item-title">{item.title}</h3>
                    <p className="included-item-text">{item.desc}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyParagraphs({ content }: { content: ServicePageContent }) {
  const paragraphs = Array.isArray(content.whyParagraph)
    ? content.whyParagraph
    : [content.whyParagraph];
  return (
    <>
      {paragraphs.map((text, i) => (
        <p
          key={i}
          style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "var(--color-muted)",
            lineHeight: 1.8,
            marginTop: i > 0 ? "16px" : undefined,
          }}
        >
          {text}
        </p>
      ))}
    </>
  );
}
