import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HydrationFlag from "@/components/HydrationFlag";

const prompt = Prompt({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bmwrepairnh.com"),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Precision BMW Repair",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={prompt.variable} suppressHydrationWarning>
      <head>
        {/* Runs before first paint:
            - html.js hides animated content from the start, so it never flashes before animating in.
              Failsafe: if the app hasn't hydrated within 5s, drop html.js so all content shows.
            - First homepage visit (or /?intro to replay): flag the intro loader. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add("js");setTimeout(function(){if(!d.dataset.hydrated)d.classList.remove("js")},5000);try{if(location.pathname==="/"&&(!localStorage.getItem("pbr-intro-seen")||/[?&]intro\\b/.test(location.search)))d.classList.add("intro-play")}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <HydrationFlag />
        <ScrollProgressBar />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
