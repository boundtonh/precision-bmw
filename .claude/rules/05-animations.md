# Animation Rules

## Hero Load Sequence
Triggers after page fully loaded. Elements animate in sequence:
1. Background image fades in, slight zoom out — 0.8s ease
2. Overlay darkens in — 0.4s ease, 0.2s delay
3. Trust bar fades up from translateY(20px) — 0.3s ease, 0.3s delay
4. Headline fades up from translateY(20px) — 0.5s ease, 0.5s delay
5. Subheadline fades up from translateY(20px) — 0.4s ease, 0.7s delay
6. CTA buttons fade up from translateY(20px) — 0.4s ease, 0.9s delay

All elements start: opacity: 0, transform: translateY(20px)
All elements end: opacity: 1, transform: translateY(0)

## Scroll Reveal
- All sections and content blocks animate on scroll into viewport
- Start state: opacity: 0, transform: translateY(24px)
- End state: opacity: 1, transform: translateY(0)
- Duration: 0.6s ease-out
- Trigger once — does not repeat on scroll up
- Use Intersection Observer API

## Stagger
For grouped elements (cards, grid items, bullet points):
- Each child delays by 0.1s more than previous
- Child 1: 0.1s, Child 2: 0.2s, Child 3: 0.3s etc.
- Max stagger delay: 0.5s

## General
- All transitions: ease or ease-out, never linear
- Never use animations that flash or strobe
- Respect prefers-reduced-motion media query
  - If reduced motion: disable all animations, show elements immediately