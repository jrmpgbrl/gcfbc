import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function WhyWeGive() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
            Generosity as Worship
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6">
            Why We Give
          </h2>
          {/* CLIENT: supply preferred stewardship language and scripture reference */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At GCFBC, we believe that giving is an act of worship — a tangible expression
            of our trust in God as the source of everything we have. Your generosity
            funds ministry programs, local outreach, international missions, and the
            ongoing work of making disciples in our community.
          </p>
          <blockquote className="border-l-4 border-accent pl-5 text-left italic text-muted-foreground">
            &ldquo;Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            <cite className="block mt-2 text-sm not-italic text-accent font-medium">
              — 2 Corinthians 9:7
            </cite>
          </blockquote>
        </div>
      </Container>
    </SectionWrapper>
  );
}
