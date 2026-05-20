import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const gatherings = [
  { day: "Sunday", time: "9:00 AM", name: "Sunday School", description: "Bible study for all ages — children through adults.", tag: "All Ages" },
  { day: "Sunday", time: "10:30 AM", name: "Morning Worship Service", description: "Our main worship gathering with praise, prayer, and expository preaching.", tag: "All Ages" },
  { day: "Wednesday", time: "7:00 PM", name: "Midweek Bible Study", description: "A deeper dive into Scripture for the whole congregation.", tag: "All Ages" },
  { day: "Friday", time: "7:00 PM", name: "Youth Group", description: "For grades 6–12. Worship, games, and real talk about faith.", tag: "Youth" },
  { day: "Saturday", time: "6:00 AM", name: "Men's Prayer Breakfast", description: "Monthly gathering (first Saturday) for prayer and fellowship.", tag: "Men" },
];

export default function RegularGatherings() {
  return (
    <SectionWrapper className="bg-muted/30">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-2">
            Regular Gatherings
          </h2>
          <p className="text-muted-foreground">
            These happen every week — come whenever you&apos;re ready.
          </p>
        </div>

        {/* CLIENT: replace with accurate weekly schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gatherings.map((g) => (
            <div
              key={g.name}
              className="bg-card border border-border rounded-lg p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 text-xs">
                  {g.tag}
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">{g.day}</span>
              </div>
              <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                {g.name}
              </h3>
              <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mb-2">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{g.time}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
