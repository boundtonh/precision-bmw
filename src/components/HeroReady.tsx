"use client";
import { useEffect } from "react";

const sequence = [
  { cls: "hero-bg-animate",       delay: 0,    duration: 2400, from: "opacity:0;transform:scale(1.12)", to: "opacity:1;transform:scale(1)" },
  { cls: "hero-overlay-animate",  delay: 300,  duration: 500,  from: "opacity:0",                       to: "opacity:1" },
  { cls: "hero-trustbar-animate", delay: 800,  duration: 500,  from: "opacity:0;transform:translateY(20px)", to: "opacity:1;transform:translateY(0)" },
  { cls: "hero-h1-animate",       delay: 1100, duration: 600,  from: "opacity:0;transform:translateY(20px)", to: "opacity:1;transform:translateY(0)" },
  { cls: "hero-sub-animate",      delay: 1400, duration: 500,  from: "opacity:0;transform:translateY(20px)", to: "opacity:1;transform:translateY(0)" },
  { cls: "hero-ctas-animate",     delay: 1700, duration: 500,  from: "opacity:0;transform:translateY(20px)", to: "opacity:1;transform:translateY(0)" },
];

function applyStyles(el: HTMLElement, styles: string) {
  styles.split(";").forEach((s) => {
    const [prop, val] = s.split(":").map((x) => x.trim());
    if (prop && val) (el.style as unknown as Record<string, string>)[prop] = val;
  });
}

export default function HeroReady() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    sequence.forEach(({ cls, delay, duration, from, to }) => {
      const el = document.querySelector<HTMLElement>(`.${cls}`);
      if (!el) return;

      // Set initial invisible state before first paint cycle
      applyStyles(el, from);
      el.style.willChange = "opacity, transform";

      timers.push(
        setTimeout(() => {
          el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
          applyStyles(el, to);
          el.style.willChange = "auto";
        }, delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
