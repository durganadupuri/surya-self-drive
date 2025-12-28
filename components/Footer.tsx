import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-base font-semibold tracking-tight">
            Surya <span className="text-accent">Self</span> Drive
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Premium self-drive car rentals with a customer-first experience.
            Luxury and budget options for city rides, trips, events, and shoots.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-foreground">Quick Links</div>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="text-muted-foreground hover:text-foreground" href="/services">
              Services
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/vehicles">
              Vehicles & Pricing
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-foreground">Contact</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>
              <span className="text-foreground">Tarun:</span> 6300934893
            </div>
            <div>
              <span className="text-foreground">Arun:</span> 6300765411
            </div>
            <div className="pt-1">
              <span className="text-foreground">Location:</span> Available on request
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} Surya Self Drive. All rights reserved.</div>
          <div className="text-muted-foreground">Premium Self-Drive Car Rentals</div>
        </div>
      </div>
    </footer>
  );
}
