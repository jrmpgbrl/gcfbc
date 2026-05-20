import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";

export default function LatestSermon() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
              Latest Message
            </p>
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
              {/* CLIENT: replace with actual series name */}
              Series: Rooted in Christ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
              {/* CLIENT: replace with actual sermon title */}
              &quot;Standing Firm When the Storm Comes&quot;
            </h2>
            <p className="text-primary-foreground/70 mb-2 text-sm">
              {/* CLIENT: replace with actual speaker and date */}
              Pastor James Anderson &nbsp;·&nbsp; June 1, 2025
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              In this message, we explore how a deep root in God&apos;s Word sustains us
              through life&apos;s most difficult seasons — and why our faith is only as
              strong as the ground it stands on.
            </p>
            <Link href="/sermons" className={cn(buttonVariants(), "bg-accent hover:bg-accent/90 text-white")}>
              More Sermons
            </Link>
          </div>

          {/* Video embed placeholder */}
          {/* CLIENT: replace src with actual YouTube/Vimeo embed URL */}
          <div className="aspect-video rounded-lg overflow-hidden bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
            <div className="text-center text-primary-foreground/40 p-8">
              <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-sm">Video embed coming soon</p>
              <p className="text-xs mt-1 opacity-60">CLIENT: replace with YouTube iframe</p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
