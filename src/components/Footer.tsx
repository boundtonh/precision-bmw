"use client";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  const routineServices = services.filter(
    (s) => s.category === "routine-maintenance"
  );
  const repairServices = services.filter((s) => s.category === "bmw-repair");
  const performanceServices = services.filter(
    (s) => s.category === "performance"
  );

  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(24px, 4vw, 48px)",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Column 1 — Brand + NAP */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <Link href="/" aria-label="Precision BMW Repair — Home">
                <Image
                  src="/images/logo/precision-bmw-logo.avif"
                  alt="Precision BMW Repair"
                  width={160}
                  height={48}
                  style={{
                    height: "36px",
                    width: "auto",
                    filter: "brightness(0) invert(1)",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              BMW-exclusive repair and maintenance in Southern NH.
              Dealer-trained expertise since 1992.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="tel:6036793883"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <PhoneIcon
                  size={15}
                  style={{ color: "var(--color-accent)", flexShrink: 0 }}
                />
                603-679-3883
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "var(--color-muted)",
                  fontSize: "13px",
                }}
              >
                <MapPinIcon
                  size={15}
                  style={{
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <address style={{ fontStyle: "normal", lineHeight: 1.6 }}>
                  25 Commercial Drive, Door 1A
                  <br />
                  Brentwood, NH 03833
                </address>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "var(--color-muted)",
                  fontSize: "13px",
                }}
              >
                <ClockIcon
                  size={15}
                  style={{
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <div style={{ lineHeight: 1.7 }}>
                  Mon–Thu: 10 AM – 6 PM
                  <br />
                  Fri: 10 AM – 5 PM
                  <br />
                  Sat–Sun: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 — Routine Maintenance */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "20px",
              }}
            >
              Routine Maintenance
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {routineServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.url}
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — BMW Repair */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "20px",
              }}
            >
              BMW Repair
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {repairServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.url}
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Performance + Site Links */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "20px",
              }}
            >
              Performance
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "32px",
              }}
            >
              {performanceServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.url}
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Schedule Service", href: "/schedule" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1f1f1f",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#555" }}>
            © {new Date().getFullYear()} Precision BMW Repair. All rights
            reserved. · Brentwood, NH 03833
          </p>
          <p style={{ fontSize: "12px", color: "#555" }}>
            Serving BMW owners in Brentwood, Exeter, Hampton, Portsmouth,
            Manchester &amp; Southern NH
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
