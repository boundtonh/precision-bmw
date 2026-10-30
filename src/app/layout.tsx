import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

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
        {/* First homepage visit (or /?intro to replay): flag the intro loader before first paint so the page never flashes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(location.pathname==="/"&&(!localStorage.getItem("pbr-intro-seen")||/[?&]intro\\b/.test(location.search)))document.documentElement.classList.add("intro-play")}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
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
