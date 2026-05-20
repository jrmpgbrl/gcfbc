import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

const events = [
  {
    date: "Jun 8, 2025",
    name: "Community Prayer Night",
    description:
      "A special evening of corporate prayer for our church, city, and nation. All are welcome.",
    tag: "Worship",
  },
  {
    date: "Jun 15, 2025",
    name: "VBS Registration Opens",
    description:
      "Vacation Bible School registration opens for children ages 4–12. Space is limited — register early!",
    tag: "Children",
  },
  {
    date: "Jun 22, 2025",
    name: "Men's Breakfast Fellowship",
    description:
      "A monthly gathering for the men of GCFBC — good food, honest conversation, and faith.",
    tag: "Men",
  },
];

export default function UpcomingEvents() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
            What&apos;s Coming
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground">
            Upcoming Events
          </h2>
        </div>

        {/* CLIENT: replace with actual upcoming events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.name} className="border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <CalendarDays className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{event.date}</span>
                </div>
                <Badge className="mb-3 bg-secondary text-secondary-foreground border-border hover:bg-secondary/80">
                  {event.tag}
                </Badge>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {event.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/events" className={cn(buttonVariants({ variant: "outline" }), "border-primary text-primary hover:bg-primary hover:text-primary-foreground")}>
            See All Events
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
