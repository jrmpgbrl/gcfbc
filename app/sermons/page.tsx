import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeaturedSermon from "./_components/FeaturedSermon";
import SermonArchive from "./_components/SermonArchive";

export const metadata: Metadata = {
  title: "Sermons | Gateway Christian Faith Baptist Church",
  description:
    "Watch messages from GCFBC's sermon archive. Available for members, visitors, and anyone exploring faith — any time, any place.",
  openGraph: {
    title: "Sermons | Gateway Christian Faith Baptist Church",
    description: "Watch messages from GCFBC's sermon archive. Available for members, visitors, and anyone exploring faith.",
    url: "https://gcfbc.vercel.app/sermons",
    siteName: "GCFBC",
    type: "website",
  },
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        heading="Sermons"
        subheading="Every message is available for anyone — member, visitor, or seeker. Come and grow."
      />
      <FeaturedSermon />
      <SermonArchive />
    </>
  );
}
