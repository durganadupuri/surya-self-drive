import type { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";

export const metadata: Metadata = {
  title: "Vehicles & Pricing",
  description:
    "Browse our self-drive vehicle lineup with weekday and weekend pricing. Contact Surya Self Drive to book.",
};

const vehicles: VehicleFromAPI[] = await getVehicles();


type VehicleFromAPI = {
  id: number;
  name: string;
  modelYear: number;
  imageUrl: string;
  pricing?: {
    weekdayPrice?: number;
    weekendPrice?: number;
  };
};


async function getVehicles() {
  const res = await fetch("http://localhost:3000/api/vehicles", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return res.json();
}

// const vehicles: Vehicle[] = [
//   {
//     name: "Hyundai i20",
//     year: 2017,
//     weekdayPrice: "Call for price",
//     weekendPrice: "Call for price",
//     imageSrc: "/vehicles/i20.jpg",
//   },
//   {
//     name: "Baleno",
//     year: 2024,
//     weekdayPrice: "Call for price",
//     weekendPrice: "Call for price",
//     imageSrc: "/vehicles/baleno.png",
//   },
//   {
//     name: "Thar",
//     year: 2025,
//     weekdayPrice: "Call for price",
//     weekendPrice: "Call for price",
//     imageSrc: "/vehicles/thar-2025.png",
//   },
//   {
//     name: "XUV700",
//     year: 2025,
//     weekdayPrice: "Call for price",
//     weekendPrice: "Call for price",
//     imageSrc: "/vehicles/xuv.png",
//   },
//   {
//     name: "Swift Dzire",
//     year: 2015,
//     weekdayPrice: "Call for price",
//     weekendPrice: "Call for price",
//     imageSrc: "/vehicles/dzire.webp",
//   },
// ];

export default async function VehiclesPage() {
  const vehicles = await getVehicles();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vehicles & Pricing
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Transparent weekday/weekend pricing and a premium fleet maintained for
            comfort and reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-white/5 px-4 py-3 text-sm text-muted-foreground">
          Pricing is indicative. Call to confirm current rates.
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v: any) => (
          <VehicleCard
            key={v.id}
            name={v.name}
            year={v.modelYear}
            weekdayPrice={
              v.pricing?.weekdayPrice
                ? `₹${v.pricing.weekdayPrice}`
                : "Call for price"
            }
            weekendPrice={
              v.pricing?.weekendPrice
                ? `₹${v.pricing.weekendPrice}`
                : "Call for price"
            }
            imageSrc={v.imageUrl}
          />
        ))}

      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-surface p-6">
          <div className="text-sm font-semibold text-foreground">What’s included</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Clean, well-maintained cars with flexible pickup/delivery support.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-surface p-6">
          <div className="text-sm font-semibold text-foreground">Weekend demand</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Weekends book fast. Reserve early for your preferred vehicle.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-surface p-6">
          <div className="text-sm font-semibold text-foreground">Need guidance?</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Tell us your plan and group size—we’ll recommend the best fit.
          </p>
        </div>
      </div>
    </div>
  );
}
