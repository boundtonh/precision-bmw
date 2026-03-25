"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { getServiceIcon, MenuIcon, XIcon, ChevronDownIcon } from "./Icons";

const NAV_CATEGORIES = [
  {
    label: "Routine Maintenance",
    key: "routine-maintenance",
    href: "/services/routine-maintenance",
  },
  {
    label: "BMW Repair",
    key: "bmw-repair",
    href: "/services/bmw-repair",
  },
  {
    label: "Performance",
    key: "performance",
    href: "/services/performance",
  },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown = useCallback((key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  const categoryServices = (catKey: string) =>
    services.filter((s) => s.category === catKey);

  const navbarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: "72px",
    display: "flex",
    alignItems: "center",
    background: scrolled
      ? "rgba(10,10,10,0.92)"
      : "rgba(10,10,10,0.85)",
    backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
    borderBottom: scrolled
      ? "1px solid rgba(42,42,42,0.8)"
      : "1px solid transparent",
    transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
  };

  return (
    <header ref={navRef} style={navbarStyle} role="banner">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Precision BMW Repair — Home"
          style={{ display: "flex", flexShrink: 0, textDecoration: "none" }}
        >
          <Image
            src="/images/logo/precision-bmw-logo.avif"
            alt="Precision BMW Repair"
            width={160}
            height={48}
            style={{
              height: "40px",
              width: "auto",
              filter: "brightness(0) invert(1)",
              objectFit: "contain",
            }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flex: 1,
            justifyContent: "center",
          }}
          className="desktop-nav"
        >
          {NAV_CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              style={{ position: "relative" }}
              onMouseEnter={() => openDropdown(cat.key)}
              onMouseLeave={closeDropdown}
            >
              <button
                aria-expanded={activeDropdown === cat.key}
                aria-haspopup="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 12px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: activeDropdown === cat.key ? "var(--color-accent)" : "#fff",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                }}
                onFocus={() => openDropdown(cat.key)}
                onBlur={closeDropdown}
              >
                {cat.label}
                <ChevronDownIcon
                  size={14}
                  style={{
                    transform: activeDropdown === cat.key ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {/* Dropdown */}
              {activeDropdown === cat.key && (
                <div
                  role="menu"
                  aria-label={`${cat.label} services`}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#141414",
                    border: "1px solid #2A2A2A",
                    borderRadius: "4px",
                    padding: "8px",
                    minWidth: "220px",
                    zIndex: 100,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                  }}
                >
                  <Link
                    href={cat.href}
                    role="menuitem"
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                      borderBottom: "1px solid #2A2A2A",
                      marginBottom: "6px",
                      paddingBottom: "12px",
                    }}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All {cat.label}
                  </Link>
                  {categoryServices(cat.key).map((svc) => {
                    const Icon = getServiceIcon(svc.slug);
                    return (
                      <Link
                        key={svc.slug}
                        href={svc.url}
                        role="menuitem"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "9px 12px",
                          borderRadius: "4px",
                          color: "#A0A0A0",
                          fontSize: "13px",
                          fontWeight: 500,
                          transition: "background 0.15s ease, color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#1f1f1f";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#A0A0A0";
                        }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Icon
                          size={16}
                          style={{ color: "var(--color-accent)", flexShrink: 0 }}
                        />
                        {svc.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/about"
            style={{
              padding: "8px 12px",
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#fff",
              letterSpacing: "0.02em",
              borderRadius: "4px",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            About
          </Link>
          <Link
            href="/faq"
            style={{
              padding: "8px 12px",
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#fff",
              letterSpacing: "0.02em",
              borderRadius: "4px",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/schedule" className="btn-primary" style={{ flexShrink: 0 }}>
          Schedule Appointment
        </Link>

        {/* Hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            background: "transparent",
            border: "1px solid #2A2A2A",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
          }}
          className="hamburger"
        >
          {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            height: "calc(100dvh - 72px)",
            background: "#0A0A0A",
            zIndex: 999,
            overflowY: "auto",
            padding: "24px 0 48px",
          }}
        >
          <div className="container">
            {/* Mobile CTA */}
            <Link
              href="/schedule"
              className="btn-primary"
              style={{ width: "100%", marginBottom: "32px" }}
              onClick={() => setMobileOpen(false)}
            >
              Schedule Appointment
            </Link>

            {/* Accordions */}
            {NAV_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                style={{ borderBottom: "1px solid #1f1f1f" }}
              >
                <button
                  aria-expanded={mobileAccordion === cat.key}
                  onClick={() =>
                    setMobileAccordion((v) =>
                      v === cat.key ? null : cat.key
                    )
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {cat.label}
                  <ChevronDownIcon
                    size={16}
                    style={{
                      color: "var(--color-accent)",
                      transform:
                        mobileAccordion === cat.key
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {mobileAccordion === cat.key && (
                  <div style={{ paddingBottom: "12px" }}>
                    <Link
                      href={cat.href}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      View All {cat.label}
                    </Link>
                    {categoryServices(cat.key).map((svc) => {
                      const Icon = getServiceIcon(svc.slug);
                      return (
                        <Link
                          key={svc.slug}
                          href={svc.url}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "11px 0",
                            color: "#A0A0A0",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <Icon
                            size={16}
                            style={{ color: "var(--color-accent)" }}
                          />
                          {svc.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* About / FAQ */}
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <Link
                href="/about"
                style={{
                  padding: "14px 0",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  borderBottom: "1px solid #1f1f1f",
                }}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                style={{
                  padding: "14px 0",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  borderBottom: "1px solid #1f1f1f",
                }}
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          header > div > a[href="/schedule"] { display: none !important; }
        }
        @media (min-width: 1025px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
