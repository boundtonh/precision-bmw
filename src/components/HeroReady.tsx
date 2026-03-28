"use client";
import { useEffect } from "react";

const sequence = [
  { cls: "hero-bg-animate",       delay: 0,    duration: 2400, fromOpacity: "0", fromTransform: "scale(1.12)", toOpacity: "1", toTransform: "scale(1)" },
  { cls: "hero-overlay-animate",  delay: 300,  duration: 500,  fromOpacity: "0", fromTransform: "",            toOpacity: "1", toTransform: "" },
  { cls: "hero-trustbar-animate", delay: 800,  duration: 500,  fromOpacity: "0", fromTransform: "translateY(20px)", toOpacity: "1", toTransform: "translateY(0)" },
  { cls: "hero-h1-animate",       delay: 1100, duration: 600,  fromOpacity: "0", fromTransform: "translateY(20px)", toOpacity: "1", toTransform: "translateY(0)" },
  { cls: "hero-sub-animate",      delay: 1400, duration: 500,  fromOpacity: "0", fromTransform: "translateY(20px)", toOpacity: "1", toTransform: "translateY(0)" },
  { cls: "hero-ctas-animate",     delay: 1700, duration: 500,  fromOpacity: "0", fromTransform: "translateY(20px)", toOpacity: "1", toTransform: "translateY(0)" },
];

export default function HeroReady() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    sequence.forEach(({ cls, delay, duration, fromOpacity, fromTransform, toOpacity, toTransform }) => {
      const el = document.querySelector<HTMLElement>(`.${cls}`);
      if (!el) return;

      // Set initial state
      el.style.opacity = fromOpacity;
      if (fromTransform) el.style.transform = fromTransform;
      el.style.willChange = "opacity, transform";

      // Force a reflow so Safari registers the initial state before
      // the transition is attached — without this, iOS Safari batches
      // the style changes and skips the transition entirely
      void el.offsetHeight;

      el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;

      timers.push(
        setTimeout(() => {
          el.style.opacity = toOpacity;
          if (toTransform) el.style.transform = toTransform;
          el.style.willChange = "auto";
        }, delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
