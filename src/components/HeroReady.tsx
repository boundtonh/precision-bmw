"use client";
import { useEffect } from "react";

export default function HeroReady() {
  useEffect(() => {
    let frame2: number;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => {
        document.documentElement.classList.add("hero-ready");
      });
    });
    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, []);

  return null;
}
