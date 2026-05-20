import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

export default function GetInvolvedCTA() {
  return (
    <SectionWrapper className="bg-secondary/40 border-t border-border">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We&apos;ll help you find your place. Reach out and someone from our team
            will connect with you personally.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-medium")}
          >
            Get Connected
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
