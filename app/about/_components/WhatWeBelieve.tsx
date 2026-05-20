import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const beliefs = [
  {
    title: "The Authority of Scripture",
    content:
      "We believe the Bible is the inspired, inerrant Word of God and the supreme authority for Christian faith and practice. All doctrine and life must be measured against its teaching.",
  },
  {
    title: "Salvation by Grace Through Faith",
    content:
      "We believe that every person is born in sin and can only be made right with God through repentance and faith in Jesus Christ, who died for our sins and rose on the third day. Salvation is a gift of grace — not earned by works.",
  },
  {
    title: "Believer's Baptism",
    content:
      "We practice baptism by immersion as a public declaration of faith in Jesus Christ, reserved for those who have made a personal confession of faith. Baptism does not save — it testifies to the salvation already received.",
  },
  {
    title: "The Priesthood of All Believers",
    content:
      "We believe every Christian has direct access to God through Jesus Christ and is called to minister according to their gifts. There is no separate priestly class — all members are ministers.",
  },
  {
    title: "The Local Church",
    content:
      "We believe the local church is the primary context for Christian growth, accountability, and mission. GCFBC is an autonomous congregation under the lordship of Christ, governed by Scripture.",
  },
];

export default function WhatWeBelieve() {
  return (
    <SectionWrapper className="bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">
              Our Faith
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-muted-foreground">
              Our beliefs are rooted in historic Baptist theology and the enduring
              truths of God&apos;s Word.
            </p>
          </div>

          {/* CLIENT: expand or adjust beliefs to match official statement of faith */}
          <Accordion className="w-full space-y-2">
            {beliefs.map((belief, i) => (
              <AccordionItem
                key={`item-${i}`}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:no-underline py-5">
                  {belief.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {belief.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </SectionWrapper>
  );
}
