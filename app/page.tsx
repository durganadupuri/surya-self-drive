import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import type { ReactNode } from "react";
import ServicesSection from "@/components/ServicesSection";
import CarRentalSteps from "@/components/CarRentalSteps";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Surya Self Drive offers premium self-drive car rentals with flexible packages. Browse vehicles and contact us to book.",
};

export const dynamic = "force-static";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Luxury & Budget Cars",
    description:
      "Handpicked cars for every plan—premium comfort or budget-friendly trips.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4-0Z" />
        <path d="M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4-0Z" />
        <path d="M5 17h10" />
        <path d="M8 12V7h12l-1 5H8Z" />
        <path d="M3 17V7h2" />
      </svg>
    ),
  },
  {
    title: "5-Seater & 7-Seater Vehicles",
    description:
      "Options for couples, families, and groups—choose the right size for your ride.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18" />
        <path d="M7 12v4" />
        <path d="M12 12v4" />
        <path d="M17 12v4" />
        <circle cx="7" cy="6" r="1" />
        <circle cx="17" cy="6" r="1" />
      </svg>
    ),
  },
  {
    title: "Flexible Rental Packages",
    description:
      "Weekday and weekend packages with easy coordination for pickup and drop.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M16 14h.01" />
        <circle cx="8" cy="18" r="1" />
        <circle cx="16" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Event & Photography Rentals",
    description:
      "Premium vehicles for celebrations, weddings, and professional shoots.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
];

function ServiceCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative h-[255.5px] w-[300px] overflow-hidden rounded-3xl border border-border/60 bg-surface p-6 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_65px_-35px_rgba(250,204,21,0.35)]">
      {/* Geometric background pattern matching reference */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23facc15' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23facc15' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal bar growing from center outward on hover */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-full w-0 bg-accent opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
      </div>

      {/* Bottom accent strip */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-accent transition-colors duration-500 group-hover:bg-accent-foreground" />

      {/* Number badge: white square with rounded corners, fully on the card, right-to-left wipe */}
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 overflow-hidden rounded-2xl bg-foreground px-3 py-1.5 text-xs font-extrabold text-background shadow-lg transition-colors duration-500 group-hover:bg-accent-foreground" style={{ width: '55px', height: '55px' }}>
        <div className="relative flex h-full w-full items-center justify-center">
          <span className="relative z-10 block transition-colors duration-500 group-hover:text-accent">
            {number}
          </span>
          <div className="absolute inset-y-0 right-0 w-0 bg-accent-foreground transition-all duration-500 ease-out group-hover:w-full" />
        </div>
      </div>

      <div className="relative">
        <div className="text-accent transition-colors duration-500 group-hover:text-accent-foreground [&>svg]:h-7 [&>svg]:w-7">
          {feature.icon}
        </div>
        <div className="mt-6 text-base font-extrabold tracking-tight text-accent transition-colors duration-500 group-hover:text-accent-foreground">
          {feature.title}
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors duration-500 group-hover:text-accent-foreground/80">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative h-[320px] sm:h-[420px]">
          <Image
            src="/vehicles/thar-banner.png"
            alt="Self-drive car rental banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                  Premium Self-Drive Rentals
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Take the wheel. Drive your way.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">
                  Luxury & budget cars with flexible weekday/weekend packages for trips, events, and shoots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Premium Self-Drive Car Rentals
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Surya <span className="text-accent">Self</span> Drive
              </h1>
              <p className="text-base leading-7 text-muted-foreground">
                Drive on your own terms. Choose from luxury and budget cars, with
                flexible rental packages for weekdays, weekends, trips, events,
                and photoshoots.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicles"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                View Vehicles
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-white/5 px-5 font-semibold text-foreground transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-surface p-4">
                <div className="text-sm font-semibold text-foreground">Clean Fleet</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Maintained for comfort & reliability
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface p-4">
                <div className="text-sm font-semibold text-foreground">Flexible</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Weekday & weekend packages
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface p-4">
                <div className="text-sm font-semibold text-foreground">Support</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Fast booking assistance
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/25 via-white/5 to-white/0 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/vehicles/thar.png"
                  alt="Surya Self Drive vehicle"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Fast delivery coordination
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Pickup/delivery available based on distance & schedule.
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-white/10"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/25">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 17h18" />
                <path d="M5 17l1.5-8h11L19 17" />
                <path d="M7 17v2" />
                <path d="M17 17v2" />
              </svg>
            </span>
            <span>What we offer</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What we offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            A clean, professional self-drive experience for city rides, trips,
            events, and shoots.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-start">
          {features.map((f, idx) => (
            <ServiceCard key={f.title} feature={f} index={idx} />
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60 bg-surface p-7">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/12 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-accent" />

          <div className="relative grid gap-5 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-foreground">
                Vehicle delivery information
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Delivery and pickup can be arranged depending on your location
                and timing. Contact us to confirm availability and charges.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-accent px-6 font-semibold text-accent-foreground transition duration-300 hover:opacity-90"
              >
                Contact Us
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-white/5 px-6 font-semibold text-foreground transition duration-300 hover:bg-white/10"
              >
                Browse Fleet
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <div><ServicesSection></ServicesSection></div>
      <CarRentalSteps />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Fleet preview
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A quick look at some popular choices.
            </p>
          </div>
          <Link
            href="/vehicles"
            className="hidden text-sm font-semibold text-accent hover:opacity-90 sm:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <VehicleCard
            name="Baleno"
            year={2024}
            weekdayPrice="Call for price"
            weekendPrice="Call for price"
            imageSrc="/vehicles/baleno.png"
          />
          <VehicleCard
            name="Thar"
            year={2025}
            weekdayPrice="Call for price"
            weekendPrice="Call for price"
            imageSrc="/vehicles/thar-2025.png"
          />
          <VehicleCard
            name="XUV700"
            year={2025}
            weekdayPrice="Call for price"
            weekendPrice="Call for price"
            imageSrc="/vehicles/xuv700.png"
          />
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/vehicles"
            className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-white/5 px-5 font-semibold text-foreground transition hover:bg-white/10"
          >
            View all vehicles
          </Link>
        </div>
      </section>
    </div>
  );
}
