import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function OurStory() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
              Our History
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-6">
              Where We Come From
            </h2>
            {/* CLIENT: replace with actual church founding story */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gateway Christian Faith Baptist Church was founded in{" "}
                <strong className="text-foreground">2005</strong> by a small group of
                believers with a vision to establish a church that was uncompromising
                in its devotion to Scripture while remaining radically open to the
                surrounding community.
              </p>
              <p>
                What began as a gathering of twelve families in a rented community
                hall has grown into a congregation of hundreds, rooted in the same
                conviction that first brought us together: that the Gospel of Jesus
                Christ changes everything.
              </p>
              <p>
                Over the years, GCFBC has planted new ministries, served thousands
                through outreach programs, and sent missionaries around the world —
                all while remaining committed to our local community and the families
                who call this church home.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          {/* CLIENT: replace with real church photo via next/image */}
          <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center border border-border">
            <div className="text-center text-muted-foreground p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📸</span>
              </div>
              <p className="text-sm font-medium">Church photo coming soon</p>
              <p className="text-xs mt-1 opacity-60">CLIENT: replace with real image</p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
