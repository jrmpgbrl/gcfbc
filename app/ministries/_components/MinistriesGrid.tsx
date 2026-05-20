import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { Baby, Users, Music, HeartHandshake, BookOpen, Globe, User2, Heart } from "lucide-react";

const ministries = [
  {
    icon: Baby,
    name: "Children's Ministry",
    description:
      "From nursery to 5th grade, our Children's Ministry creates a safe, joyful environment where kids discover that God loves them and has a purpose for their lives.",
    contact: "children@gcfbc.org",
  },
  {
    icon: Users,
    name: "Youth Ministry",
    description:
      "Our youth ministry (grades 6–12) meets weekly for worship, Bible study, and authentic community. Teenagers are not the future of the church — they are the church now.",
    contact: "youth@gcfbc.org",
  },
  {
    icon: User2,
    name: "Men's Fellowship",
    description:
      "Monthly breakfasts, Bible study groups, and service projects — GCFBC Men is a community where men are challenged to grow in godly character and servant leadership.",
    contact: "men@gcfbc.org",
  },
  {
    icon: Heart,
    name: "Women's Ministry",
    description:
      "From Bible studies to community events, Women of GCFBC is a space where women are encouraged, equipped, and supported through every season of life.",
    contact: "women@gcfbc.org",
  },
  {
    icon: Music,
    name: "Worship Ministry",
    description:
      "Our Worship Ministry serves the church through music, sound, and visual arts. If you have musical gifts and a heart for worship, we&apos;d love to talk.",
    contact: "worship@gcfbc.org",
  },
  {
    icon: Globe,
    name: "Outreach & Missions",
    description:
      "From local food drives to international mission trips, our Outreach team takes the love of Christ beyond these walls — because the Great Commission is everyone's calling.",
    contact: "outreach@gcfbc.org",
  },
  {
    icon: BookOpen,
    name: "Prayer Ministry",
    description:
      "We believe prayer is the foundation of everything we do. Our Prayer Ministry coordinates corporate prayer nights, intercessory prayer teams, and a 24/7 prayer chain.",
    contact: "prayer@gcfbc.org",
  },
  {
    icon: HeartHandshake,
    name: "Senior Adults",
    description:
      "GCFBC honors and serves our senior members through fellowship luncheons, care visits, and a dedicated small group that celebrates the wisdom of a life well lived.",
    contact: "seniors@gcfbc.org",
  },
];

export default function MinistriesGrid() {
  return (
    <SectionWrapper>
      <Container>
        {/* CLIENT: confirm full list of active ministries and update contact emails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <Card key={ministry.name} className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                    {ministry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                  <a
                    href={`mailto:${ministry.contact}`}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    {ministry.contact}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
