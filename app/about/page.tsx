import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OurStory from "./_components/OurStory";
import WhatWeBelieve from "./_components/WhatWeBelieve";
import Leadership from "./_components/Leadership";
import VisionAndMission from "./_components/VisionAndMission";

export const metadata: Metadata = {
  title: "About Us | Gateway Christian Faith Baptist Church",
  description:
    "Learn about GCFBC's history, what we believe, and the leaders who serve our congregation. A community rooted in Scripture and open to all.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="About Us"
        subheading="A community rooted in faith, united in purpose, and open to all."
      />
      <OurStory />
      <WhatWeBelieve />
      <Leadership />
      <VisionAndMission />
    </>
  );
}
