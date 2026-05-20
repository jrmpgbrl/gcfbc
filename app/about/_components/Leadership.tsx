import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const leaders = [
  {
    name: "Pastor James Anderson",
    title: "Senior Pastor",
    initials: "JA",
    bio: "Pastor James has served GCFBC since its founding, with a heart for expository preaching and discipleship. He and his wife Sarah have three children and have been part of the local community for over twenty years.",
  },
  {
    name: "Elder David Reyes",
    title: "Elder / Worship Director",
    initials: "DR",
    bio: "Elder David leads our worship ministry with a passion for helping the congregation encounter God through music. He holds a degree in theology and has served in church ministry for fifteen years.",
  },
  {
    name: "Deacon Maria Santos",
    title: "Deacon / Children's Ministry Lead",
    initials: "MS",
    bio: "Maria brings warmth and creativity to our Children's Ministry, building a team of volunteers dedicated to teaching the next generation that they are loved by God.",
  },
];

export default function Leadership() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our pastors, elders, and deacons are servants first — men and women
            called to love and lead this congregation.
          </p>
        </div>

        {/* CLIENT: replace with actual leader photos (use next/image Avatar), names, titles, and bios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <Card key={leader.name} className="border-border shadow-sm text-center">
              <CardContent className="p-8">
                {/* CLIENT: replace Avatar with actual leader photo via next/image */}
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-heading font-semibold">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-4">{leader.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
