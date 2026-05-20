"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Church } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading font-semibold text-lg sm:text-xl">
            <Church className="w-6 h-6 text-accent" aria-hidden="true" />
            <span>GCFBC</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants(), "hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white font-medium")}
            >
              Plan Your Visit
            </Link>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-primary/80 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <Container>
            <nav aria-label="Mobile navigation" className="py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-1 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={cn(buttonVariants(), "mt-2 bg-accent hover:bg-accent/90 text-white w-full")}
              >
                Plan Your Visit
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
