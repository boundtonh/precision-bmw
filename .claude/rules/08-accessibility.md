# Accessibility Rules

## Semantic HTML
- Use header, nav, main, section, article, footer — never just divs
- One h1 per page
- Logical heading hierarchy: h1 → h2 → h3
- Use button for interactive elements, a for navigation
- Never use div or span as clickable elements without role and tabindex

## Images
- All images require descriptive alt text
- Decorative images: alt=""
- Content images: descriptive alt text with location context

## Navigation
- All nav items keyboard accessible
- Dropdown menus accessible via keyboard
- Mobile menu focus trapped when open
- Skip to main content link at top of page

## Forms
- All inputs have associated label elements
- Required fields marked with aria-required="true"
- Error messages linked to inputs via aria-describedby
- Success message announced via aria-live="polite"

## Motion
- Respect prefers-reduced-motion
- @media (prefers-reduced-motion: reduce) — disable all animations
- Show all elements at full opacity immediately if reduced motion

## Color
- Never rely on color alone to convey information
- Text contrast ratio minimum 4.5:1 against background
- Interactive elements have visible focus states
- Focus ring: 2px solid #1C69D4, offset 2px