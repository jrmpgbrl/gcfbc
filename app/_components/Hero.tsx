import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background image placeholder */}
      {/* CLIENT: replace with real hero image via next/image */}
      <div
        className="absolute inset-0 opacity-15"
        style={{ background: "linear-gradient(135deg, #C9972C 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
            Welcome to GCFBC
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            You Belong Here.
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
            Gateway Christian Faith Baptist Church is a community built on faith,
            grounded in Scripture, and wide open to anyone searching for belonging,
            purpose, and grace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-accent hover:bg-accent/90 text-white font-medium")}
            >
              Plan Your Visit
            </Link>
            <Link
              href="/sermons"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent")}
            >
              Watch a Sermon
            </Link>
          </div>

          {/* Service times at a glance */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
              {/* CLIENT: replace with actual service times */}
              <span>Sunday School: 9:00 AM &nbsp;·&nbsp; Worship: 10:30 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
              {/* CLIENT: replace with actual address */}
              <span>123 Faith Avenue, Your City</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
