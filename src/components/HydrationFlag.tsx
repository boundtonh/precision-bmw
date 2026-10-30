"use client";
import { useEffect } from "react";

// Tells the failsafe in layout.tsx's inline script that the app is running,
// so it keeps html.js (and the hidden-until-animated state) in place.
export default function HydrationFlag() {
  useEffect(() => {
    document.documentElement.dataset.hydrated = "true";
  }, []);
  return null;
}
