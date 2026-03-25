# SEO Rules

## Rendering
- All content pages MUST use SSG (Static Site Generation)
- Export `export const revalidate = false` on every page
- Never use client-side only rendering for content
- Next.js App Router renders server-first by default — maintain this

## Metadata
Every page exports a unique generateMetadata() function with:
- Unique title and meta description
- Canonical URL
- OpenGraph tags
- robots: index, follow

## Page Titles
- Homepage: BMW Repair & Service in Southern NH | Precision BMW Repair
- About: About Precision BMW Repair | BMW Master Technician — Southern NH
- FAQ: BMW Repair FAQ | Precision BMW Repair — Brentwood NH
- Schedule: Schedule a BMW Repair Appointment | Precision BMW Repair
- Routine Maintenance index: BMW Routine Maintenance — Southern NH | Precision BMW Repair
- BMW Repair index: BMW Repair Services — Southern NH | Precision BMW Repair
- Performance index: BMW Performance Services — Southern NH | Precision BMW Repair
- Oil Change: BMW Oil Change Service in Southern NH | Precision BMW Repair
- Tire Balancing: BMW Tire Balancing in Southern NH | Precision BMW Repair
- Tune-Up: BMW Tune-Up Service in Southern NH | Precision BMW Repair
- Safety Inspection: BMW Safety Inspection in Southern NH | Precision BMW Repair
- Diagnostics: BMW Diagnostics in Southern NH | Precision BMW Repair
- Brake Service: BMW Brake Service & Repair in Southern NH | Precision BMW Repair
- Transmission: BMW Transmission Repair in Southern NH | Precision BMW Repair
- Electrical: BMW Electrical Repair in Southern NH | Precision BMW Repair
- Tires & Alignment: BMW Tires & Alignment in Southern NH | Precision BMW Repair
- A/C & Heating: BMW A/C & Heating Service in Southern NH | Precision BMW Repair
- Steering & Suspension: BMW Steering & Suspension in Southern NH | Precision BMW Repair
- BMW Diagnostics: BMW Diagnostics & Scanning in Southern NH | Precision BMW Repair
- Performance Upgrades: BMW Performance Upgrades in Southern NH | Precision BMW Repair

## Heading Hierarchy
- One H1 per page — always keyword optimized
- H2 for section titles
- H3 for subsections and card titles
- Never skip heading levels

## JSON-LD Structured Data
Add AutoRepair LocalBusiness schema to homepage:
- name: Precision BMW Repair
- streetAddress: 25 Commercial Drive, Door 1A
- addressLocality: Brentwood
- addressRegion: NH
- postalCode: 03833
- telephone: +16036793883
- openingHours: Mo-Th 10:00-18:00, Fr 10:00-17:00
- aggregateRating: 4.8, reviewCount: 50

Add FAQPage schema to /faq
Add Service schema to each service page
Add Person schema for Derek on /about

## Sitemap
Use next-sitemap to auto-generate sitemap.xml at build time.
Include all 21 pages.

## robots.txt
User-agent: *
Allow: /
Sitemap: https://www.bmwrepairnh.com/sitemap.xml

## Images
- Always use Next.js Image component
- Always include descriptive alt text
- Format: "BMW [service] at Precision BMW Repair in Brentwood NH"