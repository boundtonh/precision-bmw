# Styling Rules

## Google Fonts
Import Prompt from Google Fonts with weights 400, 500, 700.
Only font used sitewide — no exceptions.

## Typography
- Headlines: Prompt 700, ALL CAPS, letter-spacing: 0.08em
- Subtitles: Prompt 500, normal case, letter-spacing: 0.02em
- Body: Prompt 400, normal case, letter-spacing: 0.01em
- Buttons: Prompt 700, ALL CAPS
- Nav links: Prompt 500, normal case

## Type Scale (Desktop → Mobile)
- Hero headline: clamp(40px, 6vw, 72px)
- Page title: clamp(36px, 5vw, 56px)
- Section title: clamp(28px, 4vw, 40px)
- Subtitle: clamp(18px, 2.5vw, 24px)
- Body: clamp(14px, 1.5vw, 16px)
- Small/Label: 13px
- Button: 14px

## Line Height
- Headlines: 1.1
- Body: 1.7

## CSS Variables (define in globals.css)
--color-bg: #0A0A0A
--color-surface: #141414
--color-border: #2A2A2A
--color-accent: #1C69D4
--color-accent-hover: #2B7FE8
--color-text-primary: #FFFFFF
--color-text-secondary: #A0A0A0
--font-display: 'Prompt', sans-serif

## Section Label Pattern
Every section uses a three-tier header:
1. Label — small, accent color (#1C69D4), ALL CAPS, tracked out, Prompt 500
2. Headline — large, white, ALL CAPS, Prompt 700
3. Subheadline — muted grey (#A0A0A0), Prompt 400

## Buttons
Primary:
- Background: #1C69D4
- Text: #FFFFFF, Prompt 700, ALL CAPS
- Padding: 16px 32px
- Border-radius: 4px
- Hover: background #2B7FE8, transition 0.3s ease

Secondary:
- Background: transparent
- Border: 1px solid #FFFFFF
- Text: #FFFFFF, Prompt 700, ALL CAPS
- Padding: 16px 32px
- Border-radius: 4px
- Hover: background #FFFFFF, color #0A0A0A, transition 0.3s ease