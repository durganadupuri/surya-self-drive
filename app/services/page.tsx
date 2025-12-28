import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore self-drive rental services from Surya Self Drive: flexible packages, event rentals, photography rentals, and more.",
};

export const dynamic = "force-static";

type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
      {children}
    </div>
  );
}

const services: ServiceItem[] = [
  {
    title: "Luxury & Budget Cars",
    description:
      "Choose the right car for your trip—from premium comfort to budget-friendly daily rides.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17h18" />
          <path d="M5 17l1.5-8h11L19 17" />
          <path d="M7 17v2" />
          <path d="M17 17v2" />
          <path d="M7.5 9h9" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "5-Seater & 7-Seater Options",
    description:
      "Perfect for families and groups—compact cars, sedans, and spacious SUVs available.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
          <circle cx="12" cy="7" r="3" />
          <path d="M5 20v-1a4 4 0 0 1 4-4" />
          <path d="M19 20v-1a4 4 0 0 0-4-4" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Flexible Rental Packages",
    description:
      "Hourly, daily, weekday, weekend, and custom packages—designed for real-world travel plans.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Event & Photography Rentals",
    description:
      "Get a premium vehicle for weddings, celebrations, or professional photoshoots.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 5h-3.2l-1.6-2H8.8L7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
          <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Vehicle Delivery",
    description:
      "Convenient delivery and pickup options—coordinate with us for the best timing and location.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h12v10H3z" />
          <path d="M15 10h4l2 3v4h-6z" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Customer Support",
    description:
      "Quick assistance for booking, vehicle selection, and package guidance.",
    icon: (
      <Icon>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12a8 8 0 0 1 16 0" />
          <path d="M4 12v5a2 2 0 0 0 2 2h2" />
          <path d="M20 12v5a2 2 0 0 1-2 2h-2" />
          <path d="M12 19v3" />
        </svg>
      </Icon>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Services
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Everything you need for a smooth self-drive experience—carefully curated
          cars, flexible packages, and support.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              {service.icon}
              <div className="space-y-1">
                <div className="text-base font-semibold tracking-tight">
                  {service.title}
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/60 bg-gradient-to-br from-accent/15 via-white/5 to-white/5 p-6">
        <div className="text-sm font-semibold text-foreground">Delivery note</div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Vehicle delivery and pickup are available depending on distance and
          scheduling. Contact us to confirm availability and charges.
        </p>
      </div>
    </div>
  );
}
