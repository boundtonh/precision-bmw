"use client";
import React, { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Set invisible state via JS so content is always visible if JS fails
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
    if (delay > 0) el.style.transitionDelay = `${delay}s`;

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    if (!("IntersectionObserver" in window)) {
      // Fallback for browsers without IntersectionObserver
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
