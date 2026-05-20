import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Gateway Christian Faith Baptist Church",
  description: "Privacy Policy for the GCFBC website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero heading="Privacy Policy" />
      <SectionWrapper>
        <Container>
          <div className="max-w-2xl prose text-muted-foreground space-y-4">
            {/* CLIENT: replace with actual privacy policy */}
            <p className="text-sm text-muted-foreground italic">
              Last updated: June 2025
            </p>
            <h2 className="font-heading font-semibold text-xl text-foreground">Information We Collect</h2>
            <p>
              When you use our contact form, we collect the information you submit
              (name, email, message). This information is used solely to respond to
              your inquiry and is never sold or shared with third parties.
            </p>
            <h2 className="font-heading font-semibold text-xl text-foreground">How We Use Your Information</h2>
            <p>
              We use contact form submissions to respond to your messages. We do not
              use your information for marketing without your explicit consent.
            </p>
            <h2 className="font-heading font-semibold text-xl text-foreground">Contact Us</h2>
            <p>
              If you have questions about this policy, please email{" "}
              <a href="mailto:info@gcfbc.org" className="text-primary hover:underline">
                info@gcfbc.org
              </a>
              .
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
