import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Get in Touch
            </h2>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">Address</p>
                  {/* CLIENT: replace with actual church address */}
                  <p className="text-sm">123 Faith Avenue<br />Your City, State 00000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">Phone</p>
                  {/* CLIENT: replace with actual phone number */}
                  <a href="tel:+10000000000" className="text-sm hover:text-primary transition-colors">
                    (000) 000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">Email</p>
                  {/* CLIENT: replace with actual email address */}
                  <a href="mailto:info@gcfbc.org" className="text-sm hover:text-primary transition-colors">
                    info@gcfbc.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">Office Hours</p>
                  {/* CLIENT: replace with actual office hours */}
                  <p className="text-sm">
                    Monday – Friday: 9:00 AM – 5:00 PM<br />
                    Saturday – Sunday: By appointment
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-4">
                {/* CLIENT: replace with actual social media URLs */}
                <a
                  href="https://facebook.com"
                  aria-label="GCFBC on Facebook"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="GCFBC on YouTube"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Find Us
            </h2>
            {/* CLIENT: replace src with actual Google Maps embed URL for your church address */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-accent" aria-hidden="true" />
                <p className="font-medium text-foreground mb-1">Map coming soon</p>
                <p className="text-sm opacity-70">
                  CLIENT: replace with Google Maps iframe embed
                </p>
                {/* Example embed (uncomment and update src):
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                  title="GCFBC Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                */}
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=123+Faith+Avenue+Your+City+State"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline font-medium"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
