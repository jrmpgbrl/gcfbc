import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    name: "Community Prayer Night",
    date: "Sunday, June 8, 2025",
    time: "6:00 PM",
    location: "Main Sanctuary",
    tag: "Worship",
    description:
      "A special evening set apart for corporate prayer — for our church family, our city, and our nation. Come expecting God to move. All are welcome; no registration required.",
  },
  {
    name: "VBS Registration Opens",
    date: "Sunday, June 15, 2025",
    time: "After Morning Service",
    location: "Children's Wing",
    tag: "Children",
    description:
      "Vacation Bible School registration opens for children ages 4–12. This year's theme: \"God's Unshakeable Kingdom.\" Space is limited — visit the registration table after the morning service.",
  },
  {
    name: "Men's Breakfast Fellowship",
    date: "Saturday, June 22, 2025",
    time: "8:00 AM",
    location: "Fellowship Hall",
    tag: "Men",
    description:
      "Our monthly men's gathering — good food, real conversation, and a short devotional from the Word. Open to all men of the church and their guests.",
  },
  {
    name: "Women's Bible Study Kickoff",
    date: "Tuesday, July 1, 2025",
    time: "7:00 PM",
    location: "Room 201",
    tag: "Women",
    description:
      "Launching our summer study on the book of Ruth. New to the group? You're especially welcome. Light refreshments provided.",
  },
];

export default function UpcomingEventsList() {
  return (
    <SectionWrapper>
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-2">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground">
            Mark your calendars — here&apos;s what&apos;s coming up at GCFBC.
          </p>
        </div>

        {/* CLIENT: replace with actual upcoming events */}
        <div className="space-y-5">
          {upcomingEvents.map((event) => (
            <Card key={event.name} className="border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="shrink-0 text-center bg-primary text-primary-foreground rounded-lg p-4 w-20">
                    <p className="text-xs font-medium text-primary-foreground/70 uppercase">
                      {event.date.split(",")[0]}
                    </p>
                    <p className="text-2xl font-heading font-bold">
                      {event.date.split(" ")[2]}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {event.name}
                      </h3>
                      <Badge className="bg-secondary text-secondary-foreground border-border hover:bg-secondary/80 text-xs">
                        {event.tag}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
