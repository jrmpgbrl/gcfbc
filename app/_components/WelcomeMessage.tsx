import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function WelcomeMessage() {
  return (
    <SectionWrapper className="bg-secondary/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
            Our Heart
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6">
            A Place to Grow, Serve, and Belong
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {/* CLIENT: replace with official church mission statement if preferred */}
            At Gateway Christian Faith Baptist Church, we believe that every person is made in the
            image of God and deserves a community where they can encounter His love, grow in His
            Word, and find a purpose bigger than themselves. Whether you&apos;re visiting for the
            first time or have called GCFBC home for years, you are welcome at this table.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
