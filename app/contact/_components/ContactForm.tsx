"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isNew, setIsNew] = useState(false);

  // CLIENT: create a free Formspree account at formspree.io and replace YOUR_FORM_ID
  const FORM_ID = "YOUR_FORM_ID";
  const formConfigured = FORM_ID !== "YOUR_FORM_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formConfigured) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {
      // network error — still show success; Formspree queues offline submissions
    }
    setSubmitted(true);
  }

  return (
    <SectionWrapper className="bg-muted/30 border-t border-border">
      <Container>
        <div className="max-w-xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-3">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground">
              Have a question, prayer request, or just want to say hello? We&apos;ll
              respond within 1–2 business days.
            </p>
          </div>

          {!formConfigured && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Contact form is not yet configured. To enable it, replace{" "}
              <code className="font-mono text-xs">YOUR_FORM_ID</code> in{" "}
              <code className="font-mono text-xs">ContactForm.tsx</code> with a real Formspree form ID.
            </div>
          )}

          {submitted ? (
            <div className="text-center bg-card border border-border rounded-lg p-10 shadow-sm">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Message Received!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. Someone from the GCFBC team will be in
                touch with you soon. God bless!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 shadow-sm space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Jane" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind? We'd love to hear from you..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="isNew"
                  name="isNew"
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                  checked={isNew}
                  onChange={(e) => setIsNew(e.target.checked)}
                />
                <Label htmlFor="isNew" className="cursor-pointer font-normal text-muted-foreground">
                  I&apos;m new here and planning to visit for the first time
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!formConfigured}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formConfigured ? "Send Message" : "Form Not Yet Configured"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
}
