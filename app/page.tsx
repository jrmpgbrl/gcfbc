import type { Metadata } from "next";
import Hero from "./_components/Hero";
import WelcomeMessage from "./_components/WelcomeMessage";
import ServiceTimes from "./_components/ServiceTimes";
import FeaturedMinistries from "./_components/FeaturedMinistries";
import UpcomingEvents from "./_components/UpcomingEvents";
import LatestSermon from "./_components/LatestSermon";
import NewHereCTA from "./_components/NewHereCTA";

export const metadata: Metadata = {
  title: "Gateway Christian Faith Baptist Church | Home",
  description:
    "Welcome to GCFBC — a community rooted in faith, united in purpose. Join us for worship every Sunday. Service times, events, sermons, and more.",
  openGraph: {
    title: "Gateway Christian Faith Baptist Church",
    description: "A community rooted in faith, united in purpose. Join us for worship every Sunday.",
    url: "https://gcfbc.vercel.app",
    siteName: "GCFBC",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeMessage />
      <ServiceTimes />
      <FeaturedMinistries />
      <UpcomingEvents />
      <LatestSermon />
      <NewHereCTA />
    </>
  );
}
