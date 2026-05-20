import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Calendar } from "lucide-react";

const services = [
  {
    day: "Sunday",
    name: "Sunday School",
    time: "9:00 AM",
    description: "Bible study for all ages",
    badge: "Weekly",
  },
  {
    day: "Sunday",
    name: "Morning Worship Service",
    time: "10:30 AM",
    description: "Our main worship gathering",
    badge: "Weekly",
  },
  {
    day: "Wednesday",
    name: "Midweek Bible Study",
    time: "7:00 PM",
    description: "Deeper study of God's Word",
    badge: "Weekly",
  },
];

export default function ServiceTimes() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
            Join Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground">
            Service Times
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CLIENT: replace with actual service schedule */}
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-card border border-border rounded-lg p-6 shadow-sm text-center"
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                {service.badge}
              </Badge>
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>{service.day}</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {service.name}
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-2xl font-semibold text-primary mb-3">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>{service.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
          {/* CLIENT: replace with actual address */}
          <span className="text-sm">123 Faith Avenue, Your City, State 00000</span>
        </div>
      </Container>
    </SectionWrapper>
  );
}
