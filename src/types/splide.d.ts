declare module "@splidejs/react-splide" {
  import { ComponentProps, ReactNode } from "react";

  export interface SplideOptions {
    type?: string;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    perPage?: number;
    gap?: string | number;
    speed?: number;
    pagination?: boolean;
    arrows?: boolean;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    [key: string]: unknown;
  }

  export interface SplideProps {
    options?: SplideOptions;
    children?: ReactNode;
    "aria-label"?: string;
    className?: string;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
  }

  export function Splide(props: SplideProps): JSX.Element;
  export function SplideSlide(props: SplideSlideProps): JSX.Element;
}
