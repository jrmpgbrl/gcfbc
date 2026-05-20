import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function VisionAndMission() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
            Why We Exist
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-10">
            Our Vision &amp; Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl text-accent mb-3">
                Our Mission
              </h3>
              {/* CLIENT: replace with official mission statement */}
              <p className="text-primary-foreground/80 leading-relaxed">
                To make disciples of Jesus Christ who love God, love people, and
                live on mission — in our homes, our community, and to the ends of
                the earth.
              </p>
            </div>

            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl text-accent mb-3">
                Our Vision
              </h3>
              {/* CLIENT: replace with official vision statement */}
              <p className="text-primary-foreground/80 leading-relaxed">
                A church where every person — regardless of background — encounters
                the transforming grace of God and finds a family to belong to.
              </p>
            </div>
          </div>

          {/* CLIENT: replace with a preferred scripture reference */}
          <blockquote className="mt-10 text-lg italic text-primary-foreground/70">
            &ldquo;Go therefore and make disciples of all nations, baptizing them in
            the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            <cite className="block mt-2 text-sm not-italic text-accent">
              — Matthew 28:19
            </cite>
          </blockquote>
        </div>
      </Container>
    </SectionWrapper>
  );
}
