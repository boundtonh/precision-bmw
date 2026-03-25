import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import SchedulingForm from "@/components/SchedulingForm";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Schedule a BMW Repair Appointment | Precision BMW Repair",
  description:
    "Request a BMW service appointment at Precision BMW Repair in Brentwood, NH. Dealer-trained technician, OEM parts, warranty on all work. Serving Southern NH.",
  alternates: { canonical: "https://www.bmwrepairnh.com/schedule" },
  openGraph: {
    title: "Schedule a BMW Repair Appointment | Precision BMW Repair",
    url: "https://www.bmwrepairnh.com/schedule",
  },
};

export default function SchedulePage() {
  return (
    <>
      <InteriorHero
        label="Book Service"
        h1="Schedule Your BMW Service Appointment"
        description="Fill out the form below and we'll confirm your appointment within 1 business day. For the fastest response, text or call 603-679-3883."
      />
      <SchedulingForm />
    </>
  );
}
