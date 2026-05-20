import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Gateway Christian Faith Baptist Church",
  description:
    "Get in touch with GCFBC. Find our address, phone number, office hours, and send us a message. We'd love to hear from you.",
  openGraph: {
    title: "Contact | Gateway Christian Faith Baptist Church",
    description: "Get in touch with GCFBC. Find our address, phone number, office hours, and send us a message.",
    url: "https://gcfbc.vercel.app/contact",
    siteName: "GCFBC",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="We'd Love to Hear from You"
        subheading="Whether you're planning your first visit or have a prayer request — we're here."
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
