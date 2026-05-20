import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function FeaturedSermon() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
              {/* CLIENT: replace with actual series name */}
              Series: Rooted in Christ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-2">
              {/* CLIENT: replace with actual sermon title */}
              &ldquo;Standing Firm When the Storm Comes&rdquo;
            </h2>
            <p className="text-muted-foreground text-sm">
              {/* CLIENT: replace with actual speaker name and date */}
              Pastor James Anderson &nbsp;·&nbsp; June 1, 2025
            </p>
          </div>

          {/* Video embed — CLIENT: replace with actual YouTube or Vimeo iframe src */}
          <div className="aspect-video rounded-lg overflow-hidden bg-muted border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground p-8">
              <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">▶</span>
              </div>
              <p className="font-medium">Video coming soon</p>
              <p className="text-sm mt-2 opacity-60">
                CLIENT: replace this block with an iframe embed from YouTube or Vimeo
              </p>
              {/* Example embed (commented out until client provides URL):
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Sermon: Standing Firm When the Storm Comes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              */}
            </div>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            In this message, Pastor James explores how a deep root in God&apos;s Word
            sustains us through life&apos;s most difficult seasons — and why faith is
            only as strong as the foundation it stands on. Drawn from Matthew 7:24–27.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
