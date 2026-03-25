# Layout Rules

## Container
Every piece of content lives inside a container:
- max-width: 1280px
- margin: 0 auto
- padding: 0 clamp(16px, 4vw, 32px)

Never place text, cards, buttons, or headings outside the container.
Sections can be full width for backgrounds — content always inside container.

## Section Pattern
<section> — full width, background color or image
  <div class="container"> — all content here
    [section label]
    [section headline]
    [section subheadline]
    [content]
  </div>
</section>

## Section Padding
padding: clamp(64px, 8vw, 128px) 0

## Hero Heights
Homepage hero: min-height: clamp(600px, 100vh, 1080px) + padding: 96px 0
Interior page heroes: min-height: clamp(400px, 60vh, 700px) + padding: 96px 0

## Breakpoints
- Mobile: < 768px
- Tablet: 768px–1024px
- Desktop: > 1024px

## Service Card Grid
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Card min-height: clamp(200px, 25vw, 280px)

## Spacing Scale (8px base unit)
- xs: 8px
- sm: 16px
- md: 32px
- lg: 64px
- xl: 96px
- 2xl: 128px