"use client";
import { useEffect, useRef } from "react";

// Homepage intro, shown once per browser. The inline script in layout.tsx adds
// html.intro-play before first paint on a first visit; without that class the
// overlay stays display:none, so returning visitors never see it.

export const INTRO_DONE_EVENT = "pbr:intro-done";
const STORAGE_KEY = "pbr-intro-seen";
const MIN_DURATION = 2200; // ms from navigation start, so the logo sequence can finish
const MAX_WAIT = 4500;     // never hold the page longer than this waiting for load
const EXIT_DURATION = 800;

export default function IntroLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("intro-play")) return;

    let exited = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const exit = () => {
      if (exited) return;
      exited = true;
      overlayRef.current?.classList.add("intro-exit");
      // Start the hero sequence as the overlay fades so the two overlap
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
      timers.push(
        setTimeout(() => {
          html.classList.remove("intro-play");
          try {
            localStorage.setItem(STORAGE_KEY, "1");
          } catch {}
        }, EXIT_DURATION)
      );
    };

    const remainingMin = Math.max(0, MIN_DURATION - performance.now());
    const whenLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const minElapsed = new Promise<void>((r) => timers.push(setTimeout(r, remainingMin)));
    Promise.all([whenLoaded, minElapsed]).then(exit);
    timers.push(setTimeout(exit, Math.max(remainingMin, MAX_WAIT - performance.now())));

    // Let impatient visitors skip it
    const skip = () => exit();
    window.addEventListener("keydown", skip, { once: true });
    overlayRef.current?.addEventListener("click", skip, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  return (
    <div ref={overlayRef} className="intro-overlay" aria-hidden="true">
      <link rel="preload" href="/images/logo/precision-bmw-logo.avif" as="image" />
      <div className="intro-logo">
        <span className="intro-logo-layer intro-logo-graphic" />
        <span className="intro-logo-layer intro-logo-wordmark" />
        <span className="intro-logo-layer intro-logo-shine" />
      </div>
      <div className="intro-progress">
        <span />
      </div>
    </div>
  );
}
