import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  async redirects() {
    return [
      {
        source: "/aboutus",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/routinemaintenance",
        destination: "/services/routine-maintenance",
        permanent: true,
      },
      {
        source: "/repairservices",
        destination: "/services/bmw-repair",
        permanent: true,
      },
      {
        source: "/specializedservices",
        destination: "/services/bmw-repair",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/",
        permanent: true,
      },
      // Performance category is hidden for now — temporary so it can come back later
      {
        source: "/services/performance/:path*",
        destination: "/services/bmw-repair",
        permanent: false,
      },
      {
        source: "/services/performance",
        destination: "/services/bmw-repair",
        permanent: false,
      },
      {
        source: "/contactus",
        destination: "/schedule",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
