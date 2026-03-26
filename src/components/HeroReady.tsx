"use client";
import { useEffect } from "react";

export default function HeroReady() {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.documentElement.classList.add("hero-ready");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
