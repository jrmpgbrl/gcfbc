import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

const sermons = [
  { title: "The God Who Sees You", speaker: "Pastor James Anderson", date: "May 25, 2025", series: "Rooted in Christ" },
  { title: "Faith That Moves Mountains", speaker: "Elder David Reyes", date: "May 18, 2025", series: "Rooted in Christ" },
  { title: "Grace Upon Grace", speaker: "Pastor James Anderson", date: "May 11, 2025", series: "Rooted in Christ" },
  { title: "Called and Chosen", speaker: "Pastor James Anderson", date: "May 4, 2025", series: "God's Unshakeable Kingdom" },
  { title: "When Silence Speaks", speaker: "Elder David Reyes", date: "Apr 27, 2025", series: "God's Unshakeable Kingdom" },
  { title: "The Way of the Cross", speaker: "Pastor James Anderson", date: "Apr 20, 2025", series: "Easter Special" },
];

export default function SermonArchive() {
  return (
    <SectionWrapper className="bg-muted/30">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-2">
            Past Messages
          </h2>
          <p className="text-muted-foreground">
            Missed a Sunday? Every message is available here.
          </p>
        </div>

        {/* CLIENT: replace with actual sermon titles, speakers, dates, series, and YouTube/Vimeo links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sermons.map((sermon, i) => (
            <Card key={`sermon-${i}`} className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                {/* Thumbnail placeholder — CLIENT: replace with YouTube thumbnail via next/image */}
                <div className="aspect-video bg-primary flex items-center justify-center rounded-t-lg">
                  <div className="text-center text-primary-foreground/40">
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mx-auto mb-1">
                      <span className="text-sm">▶</span>
                    </div>
                    <p className="text-xs">Video thumbnail</p>
                  </div>
                </div>
                <div className="p-5">
                  <Badge className="mb-2 bg-secondary text-secondary-foreground border-border text-xs hover:bg-secondary/80">
                    {sermon.series}
                  </Badge>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1 leading-snug">
                    &ldquo;{sermon.title}&rdquo;
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {sermon.speaker} &nbsp;·&nbsp; {sermon.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
