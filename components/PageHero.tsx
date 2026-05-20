import Container from "@/components/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  heading: string;
  subheading?: string;
  className?: string;
}

export default function PageHero({ heading, subheading, className }: PageHeroProps) {
  return (
    <div className={cn("bg-primary text-primary-foreground py-16 sm:py-24", className)}>
      <Container>
        <h1 className="text-4xl sm:text-5xl font-heading font-semibold mb-4">{heading}</h1>
        {subheading && (
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl">{subheading}</p>
        )}
      </Container>
    </div>
  );
}
