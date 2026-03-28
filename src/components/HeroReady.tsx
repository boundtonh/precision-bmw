"use client";
import { useEffect } from "react";

const steps = [
  { cls: "hero-bg-animate",       delay: 0    },
  { cls: "hero-overlay-animate",  delay: 300  },
  { cls: "hero-trustbar-animate", delay: 800  },
  { cls: "hero-h1-animate",       delay: 1100 },
  { cls: "hero-sub-animate",      delay: 1400 },
  { cls: "hero-ctas-animate",     delay: 1700 },
];

export default function HeroReady() {
  useEffect(() => {
    // Add .animating to set opacity:0 via CSS, then force a reflow so the
    // browser commits that state before we trigger the transition
    steps.forEach(({ cls }) => {
      document.querySelector(`.${cls}`)?.classList.add("animating");
    });

    // offsetHeight read forces a reflow — required on iOS Safari to ensure
    // the "from" state is committed before the transition-triggering class fires
    void document.body.offsetHeight;

    const timers = steps.map(({ cls, delay }) =>
      setTimeout(() => {
        document.querySelector(`.${cls}`)?.classList.add("active");
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
