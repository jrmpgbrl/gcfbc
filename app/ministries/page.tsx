import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MinistriesGrid from "./_components/MinistriesGrid";
import GetInvolvedCTA from "./_components/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "Ministries | Gateway Christian Faith Baptist Church",
  description:
    "Explore the ministries of GCFBC — Children, Youth, Men, Women, Worship, Outreach, Prayer, and Senior Adults. There's a place for everyone.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        heading="Ministries"
        subheading="Whatever your life stage or background, there's a place for you at GCFBC."
      />
      <MinistriesGrid />
      <GetInvolvedCTA />
    </>
  );
}
