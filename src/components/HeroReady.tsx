"use client";
import { useEffect } from "react";
import { INTRO_DONE_EVENT } from "./IntroLoader";

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
    // Hero layers are already hidden from first paint (html.js in globals.css),
    // so the "from" state is committed; adding .active triggers each transition.

    let timers: ReturnType<typeof setTimeout>[] = [];
    const start = () => {
      timers = steps.map(({ cls, delay }) =>
        setTimeout(() => {
          document.querySelector(`.${cls}`)?.classList.add("active");
        }, delay)
      );
    };

    // On a first visit the intro loader is covering the page; start when it begins to exit
    const introPlaying = document.documentElement.classList.contains("intro-play");
    if (introPlaying) window.addEventListener(INTRO_DONE_EVENT, start, { once: true });
    else start();

    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, start);
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
