import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import type { ReactNode } from "react";

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
        className="h-5 w-5"
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
    ),
  },
  {
    title: "5-Seater & 7-Seater Vehicles",
    description:
      "Options for couples, families, and groups—choose the right size for your ride.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M7 20v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
        <path d="M5 20v-1a4 4 0 0 1 4-4" />
        <path d="M19 20v-1a4 4 0 0 0-4-4" />
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
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
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
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5h-3.2l-1.6-2H8.8L7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    ),
  },
];

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

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we offer
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A clean, professional self-drive experience for city rides, trips,
              events, and shoots.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border/60 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30">
                {f.icon}
              </div>
              <div className="mt-4 text-base font-semibold tracking-tight">
                {f.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-gradient-to-br from-accent/15 via-white/5 to-white/0 p-6">
          <div className="grid gap-4 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-foreground">
                Vehicle delivery information
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Delivery and pickup can be arranged depending on your location
                and timing. Contact us to confirm availability and charges.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Contact Us
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-white/5 px-5 font-semibold text-foreground transition hover:bg-white/10"
              >
                Browse Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

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
