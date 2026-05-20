import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { Baby, Users, Music } from "lucide-react";

const ministries = [
  {
    icon: Baby,
    name: "Children's Ministry",
    description:
      "Nurturing the next generation in faith through age-appropriate teaching, worship, and friendship every Sunday.",
  },
  {
    icon: Users,
    name: "Youth Ministry",
    description:
      "A vibrant community for teens to ask hard questions, build real friendships, and grow in their walk with God.",
  },
  {
    icon: Music,
    name: "Worship Ministry",
    description:
      "Serving the congregation through music, song, and creative arts that lead hearts into the presence of God.",
  },
];

export default function FeaturedMinistries() {
  return (
    <SectionWrapper className="bg-muted/40">
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4">
            There&apos;s a Place for You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whatever your life stage or background, one of our ministries was built
            with you in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <Card key={ministry.name} className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {ministry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/ministries" className={cn(buttonVariants({ variant: "outline" }), "border-primary text-primary hover:bg-primary hover:text-primary-foreground")}>
            View All Ministries
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
