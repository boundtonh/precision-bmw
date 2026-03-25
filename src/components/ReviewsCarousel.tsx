"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { StarIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    name: "John M.",
    text: "Derek is hands down the best BMW technician I've ever worked with. Dealer quality at a fraction of the price.",
  },
  {
    name: "Sarah K.",
    text: "Finally found a shop I can trust with my X5. Precision BMW is the real deal.",
  },
  {
    name: "Mike T.",
    text: "Incredible attention to detail. My 3 Series runs like new. Won't take my BMW anywhere else.",
  },
  {
    name: "Lisa R.",
    text: "Derek diagnosed an issue three dealers missed. Unreal level of expertise.",
  },
  {
    name: "Tom B.",
    text: "Professional, honest, and incredibly knowledgeable. Best BMW shop in New Hampshire.",
  },
];

export default function ReviewsCarousel() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        padding: "var(--section-pad) 0",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <SectionHeader
          label="Customer Reviews"
          headline="What BMW Owners Are Saying"
          subheadline="4.8 stars across 50+ Google reviews from BMW owners across Southern NH."
          centered
        />

        <Splide
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            perPage: 3,
            gap: "32px",
            speed: 600,
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          aria-label="Customer reviews"
        >
          {reviews.map((review) => (
            <SplideSlide key={review.name}>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "4px",
                  padding: "32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      style={{ color: "#F5A623", fill: "#F5A623" }}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="sr-only">5 out of 5 stars</span>
                </div>

                {/* Review text */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-muted)",
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer name */}
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  — {review.name}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Leave a review CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
          }}
        >
          <a
            href="https://reviewthis.biz/precisionbmw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
