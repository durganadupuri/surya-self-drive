import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/60">
      {/* subtle gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div className="space-y-4">
            <div className="text-lg font-semibold tracking-tight">
              Surya <span className="text-accent">Self</span> Drive
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Premium self-drive car rentals with a customer-first experience.
              Luxury and budget options for city rides, trips, events, and shoots.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="mb-5 text-xs font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </div>
            <div className="flex flex-col gap-4 text-sm">
              {[
                { label: "Services", href: "/services" },
                { label: "Vehicles & Pricing", href: "/vehicles" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative w-fit text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}

                  {/* animated bright underline */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-300 ease-out group-hover:w-full" />

                  {/* subtle glow */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent/60 blur-sm transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="mb-5 text-xs font-semibold uppercase tracking-wider text-foreground">
              Contact
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="text-foreground">Tarun:</span> 6300934893
              </div>
              <div>
                <span className="text-foreground">Arun:</span> 6300765411
              </div>
              <div>
                <span className="text-foreground">Location:</span> Available on request
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} Surya Self Drive. All rights reserved.</div>
          <div>Premium Self-Drive Car Rentals</div>
        </div>
      </div>
    </footer>
  );
}
