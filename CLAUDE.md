# Precision BMW Repair — Project Overview

## What This Is
A professional multi-page marketing website for Precision BMW Repair, a BMW-exclusive repair and maintenance facility in Brentwood, NH. The site targets BMW owners in Southern NH searching for expert repair and maintenance services.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- React Compiler enabled
- Splide.js for review carousel
- React Hook Form for scheduling form

## Key Rules
- All content pages use SSG (Static Site Generation) — never CSR for content
- One H1 per page — always keyword optimized (see .claude/context/keywords.md)
- NAP (Name, Address, Phone) must be identical everywhere it appears
- Never use fixed heights — use clamp() + padding (see .claude/rules/03-layout.md)
- All content lives inside a container div (see .claude/rules/03-layout.md)
- Prompt is the only font used sitewide (Google Fonts)
- No aftermarket parts messaging — OEM/genuine BMW parts only

## Project Structure
src/
  app/          ← Next.js App Router pages
  components/   ← Reusable components
  data/         ← bmwModels.ts, services.ts, faq.ts
  styles/       ← globals.css with CSS variables
.claude/
  rules/        ← Specific build guidelines
  context/      ← Brand, business, and content reference

## Rule Files
- 01-seo.md — metadata, JSON-LD, sitemap, robots.txt
- 02-styling.md — colors, typography, CSS variables
- 03-layout.md — container, sections, breakpoints
- 04-components.md — buttons, cards, nav, footer
- 05-animations.md — hero load, scroll reveal, stagger
- 06-forms.md — scheduling form behavior and fields
- 07-redirects.md — 301 redirects from old URLs
- 08-accessibility.md — semantic HTML, aria, alt text

## Context Files
- brand.md — Derek's story, tone of voice, positioning
- business-info.md — address, phone, hours, NAP
- services.md — all 14 services, slugs, descriptions
- keywords.md — H1/H2 targets per page

## Never Do
- Never use client-side only rendering on content pages
- Never use fixed heights anywhere
- Never reference aftermarket parts
- Never break NAP consistency
- Never use any font other than Prompt
- Never exceed one H1 per page