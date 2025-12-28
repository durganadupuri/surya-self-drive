import Image from "next/image";

type VehicleCardProps = {
  name: string;
  year: number;
  weekdayPrice: string;
  weekendPrice: string;
  imageSrc: string;
};

export default function VehicleCard({
  name,
  year,
  weekdayPrice,
  weekendPrice,
  imageSrc,
}: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${name} ${year}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10">
          {year}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">Flexible plans for weekdays and weekends</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border/60 bg-white/5 p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Weekday
            </div>
            <div className="mt-1 text-base font-semibold text-foreground">
              {weekdayPrice}
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-white/5 p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Weekend
            </div>
            <div className="mt-1 text-base font-semibold text-foreground">
              {weekendPrice}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="text-xs text-muted-foreground">Pickup & delivery available</div>
          <div className="text-xs font-semibold text-accent">Call to book</div>
        </div>
      </div>
    </article>
  );
}
