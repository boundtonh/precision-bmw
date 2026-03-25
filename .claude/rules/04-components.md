# Component Rules

## Navbar
- Fixed at top, full width, z-index high
- Background: #0A0A0A with slight transparency + blur on scroll
- Logo left, three dropdowns center, Schedule button right
- Three dropdowns: Routine Maintenance, BMW Repair, Performance
- Dropdown activates on hover (desktop)
- Each dropdown item shows line icon + service name
- Schedule Appointment button: primary button style, always visible
- On scroll: navbar stays fixed, Schedule button always visible

## Mobile Nav
- Hamburger icon on right
- Full screen menu on open
- Schedule Appointment button at top, directly under logo
- Three categories accordion style (expand/collapse)
- Links: About, FAQ below accordions
- Schedule button primary style, full width

## Service Cards
- Background: placeholder image with gradient overlay
- Gradient: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)
- Content anchored bottom left: line icon + service name
- Border: 1px solid #2A2A2A
- Border-radius: 4px
- Hover: border color shifts to #1C69D4, background image scale(1.05)
- Image transition: transform 0.4s ease
- overflow: hidden on card to clip zoom effect
- min-height: clamp(200px, 25vw, 280px)

## Reviews Carousel (Splide.js)
- Reference docs: https://splidejs.com/guides/getting-started/
- Type: loop
- Autoplay: true, pause on hover
- Per page: 3 desktop, 2 tablet, 1 mobile
- Gap: 32px
- Arrows: custom styled, BMW blue (#1C69D4), chevron icon
- Pagination dots: yes, subtle
- Transition speed: 600ms
- Each slide: #141414 background, border 1px solid #2A2A2A, border-radius 4px, padding 32px
- Content: star rating (5 stars, gold), reviewer name (Prompt 500), review text (Prompt 400, #A0A0A0)
- CTA below carousel: Leave a Review button → https://reviewthis.biz/precisionbmw, opens new tab

## Footer
- Background: #0A0A0A
- Border-top: 1px solid #2A2A2A
- Content: logo, address, phone, hours, nav links, copyright
- NAP must match exactly: Precision BMW Repair, 25 Commercial Drive Door 1A, Brentwood NH 03833, 603-679-3883
- Layout: 3-4 columns desktop, stacked mobile