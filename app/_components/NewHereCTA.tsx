import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

export default function NewHereCTA() {
  return (
    <SectionWrapper className="bg-accent/10 border-t border-accent/20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
            New Here?
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4">
            Not Sure What to Expect?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Visiting a new church can feel like a big step. At GCFBC, you can expect a
            warm welcome, genuine community, and a message grounded in God&apos;s Word
            — no pressure, no performance. Just come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-medium")}
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary text-primary hover:bg-primary hover:text-primary-foreground")}
            >
              Learn About Us
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We&apos;d love to meet you. &mdash; The GCFBC Family
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
