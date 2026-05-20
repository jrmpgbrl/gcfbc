import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyWeGive from "./_components/WhyWeGive";
import GivingOptions from "./_components/GivingOptions";
import GivingFAQ from "./_components/GivingFAQ";

export const metadata: Metadata = {
  title: "Give | Gateway Christian Faith Baptist Church",
  description:
    "Support the mission of GCFBC through online giving, in-person offering, or by mail. Your generosity makes a difference.",
  openGraph: {
    title: "Give | Gateway Christian Faith Baptist Church",
    description: "Support the mission of GCFBC through online giving, in-person offering, or by mail. Your generosity makes a difference.",
    url: "https://gcfbc.vercel.app/give",
    siteName: "GCFBC",
    type: "website",
  },
};

export default function GivePage() {
  return (
    <>
      <PageHero
        heading="Give"
        subheading="Your generosity fuels the work God is doing through Gateway Christian Faith Baptist Church."
      />
      <WhyWeGive />
      <GivingOptions />
      <GivingFAQ />
    </>
  );
}
