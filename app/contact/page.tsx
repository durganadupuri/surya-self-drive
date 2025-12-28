import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Surya Self Drive to book a self-drive car. Call Tarun or Arun for availability and pricing.",
};

// Force static rendering (IMPORTANT for Netlify)
export const dynamic = "force-static";

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Call or message us for availability, pricing, and delivery details.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <InfoCard title="Phone">
            <div className="space-y-2">
              <div>
                <span className="text-foreground">Tarun:</span> 6300934893
              </div>
              <div>
                <span className="text-foreground">Arun:</span> 6300765411
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Business Location">
            <div>
              We share the pickup/delivery location based on your booking and
              schedule.
            </div>
          </InfoCard>

          <InfoCard title="Hours">
            <div>Daily availability. Contact us for exact timings.</div>
          </InfoCard>
        </div>

        {/* RIGHT SIDE – NETLIFY FORM */}
        <div className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm">
          <div className="text-sm font-semibold text-foreground">
            Send a message
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Fill the form and we’ll contact you shortly.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you/"
            className="mt-6 space-y-4"
          >
            {/* REQUIRED hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot */}
            <input type="hidden" name="bot-field" />

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none ring-accent/30 placeholder:text-muted-foreground focus:ring-4"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none ring-accent/30 placeholder:text-muted-foreground focus:ring-4"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Vehicle, dates, pickup/delivery details..."
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/30 placeholder:text-muted-foreground focus:ring-4"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent text-accent-foreground font-semibold transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
