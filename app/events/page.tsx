import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UpcomingEventsList from "./_components/UpcomingEventsList";
import RegularGatherings from "./_components/RegularGatherings";

export const metadata: Metadata = {
  title: "Events | Gateway Christian Faith Baptist Church",
  description:
    "Stay up to date with upcoming events and weekly gatherings at GCFBC. There's always something happening in our community.",
  openGraph: {
    title: "Events | Gateway Christian Faith Baptist Church",
    description: "Stay up to date with upcoming events and weekly gatherings at GCFBC. There's always something happening.",
    url: "https://gcfbc.vercel.app/events",
    siteName: "GCFBC",
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        heading="Events"
        subheading="A window into the life of our community — something's always happening at GCFBC."
      />
      <UpcomingEventsList />
      <RegularGatherings />
    </>
  );
}
