import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { CreditCard, HandCoins, Mail } from "lucide-react";

const options = [
  {
    icon: CreditCard,
    title: "Give Online",
    description:
      "Secure online giving available 24/7. Set up a one-time or recurring gift in minutes.",
    action: "Give Online",
    // CLIENT: replace href with actual giving platform URL (Tithe.ly, PayPal, etc.)
    href: "https://tithe.ly/give",
    external: true,
  },
  {
    icon: HandCoins,
    title: "Give In Person",
    description:
      "Offering envelopes are available at the sanctuary entrance. Drop boxes are located near each exit.",
    action: null,
    href: null,
    external: false,
  },
  {
    icon: Mail,
    title: "Give by Mail",
    description:
      "Make checks payable to \"Gateway Christian Faith Baptist Church\" and mail to our church office.",
    action: null,
    href: null,
    external: false,
  },
];

export default function GivingOptions() {
  return (
    <SectionWrapper className="bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-3">
            Ways to Give
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose what works best for you. Every gift, large or small, makes a
            difference.
          </p>
        </div>

        {/* CLIENT: update online giving link and mailing address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <Card key={option.title} className="border-border shadow-sm text-center">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {option.description}
                  </p>
                  {option.action && option.href && (
                    <a
                      href={option.href}
                      target={option.external ? "_blank" : undefined}
                      rel={option.external ? "noopener noreferrer" : undefined}
                      className={cn(buttonVariants(), "bg-accent hover:bg-accent/90 text-white font-medium")}
                    >
                      {option.action}
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
