import Link from "next/link";
import { Church, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="w-6 h-6 text-accent" aria-hidden="true" />
              <span className="font-heading font-semibold text-lg">GCFBC</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Gateway Christian Faith Baptist Church — a community rooted in faith,
              united in purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {/* CLIENT: replace with actual church address */}
                <span>123 Faith Avenue, Your City, State 00000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                {/* CLIENT: replace with actual phone number */}
                <a href="tel:+10000000000" className="hover:text-primary-foreground transition-colors">
                  (000) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                {/* CLIENT: replace with actual email */}
                <a href="mailto:info@gcfbc.org" className="hover:text-primary-foreground transition-colors">
                  info@gcfbc.org
                </a>
              </li>
            </ul>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {/* CLIENT: replace href with actual Facebook page URL (e.g. https://facebook.com/yourchurchname) */}
              <a
                href="#"
                aria-label="GCFBC on Facebook (link coming soon)"
                aria-disabled="true"
                className="flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent transition-colors pointer-events-none opacity-50"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Facebook</span>
              </a>
              {/* CLIENT: replace href with actual YouTube channel URL (e.g. https://youtube.com/@yourchurch) */}
              <a
                href="#"
                aria-label="GCFBC on YouTube (link coming soon)"
                aria-disabled="true"
                className="flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent transition-colors pointer-events-none opacity-50"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Gateway Christian Faith Baptist Church. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
