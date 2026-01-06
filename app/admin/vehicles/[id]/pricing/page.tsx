import { prisma } from "@/lib/prisma";

export default async function EditPricingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicleId = Number(id);

  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
    include: {
      pricing: true,
    },
  });

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className="mx-auto max-w-xl py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Pricing – {vehicle.name}
      </h1>

    <form
    action={`/api/admin/vehicles/${vehicle.id}/pricing`}
    method="post"
    className="space-y-4"
    >
    {/* Price Type */}
    <div>
        <label className="block text-sm font-medium">Price Type</label>
        <select
        name="priceType"
        defaultValue={vehicle.pricing?.priceType ?? "FIXED"}
        className="mt-1 w-full rounded border px-3 py-2"
        >
        <option value="FIXED">Fixed</option>
        <option value="RANGE">Range</option>
        </select>
    </div>

    {/* Weekday Price */}
    <div>
        <label className="block text-sm font-medium">Weekday Price</label>
        <input
        type="text"
        name="weekdayPrice"
        defaultValue={vehicle.pricing?.weekdayPrice ?? ""}
        className="mt-1 w-full rounded border px-3 py-2"
        />
    </div>

    {/* Weekend Price */}
    <div>
        <label className="block text-sm font-medium">Weekend Price</label>
        <input
        type="text"
        name="weekendPrice"
        defaultValue={vehicle.pricing?.weekendPrice ?? ""}
        className="mt-1 w-full rounded border px-3 py-2"
        />
    </div>

    {/* Min Price */}
    <div>
        <label className="block text-sm font-medium">Min Price</label>
        <input
        type="number"
        name="minPrice"
        defaultValue={vehicle.pricing?.minPrice ?? ""}
        className="mt-1 w-full rounded border px-3 py-2"
        />
    </div>

    {/* Max Price */}
    <div>
        <label className="block text-sm font-medium">Max Price</label>
        <input
        type="number"
        name="maxPrice"
        defaultValue={vehicle.pricing?.maxPrice ?? ""}
        className="mt-1 w-full rounded border px-3 py-2"
        />
    </div>

    <button className="rounded bg-black px-4 py-2 text-white">
        Save Pricing
    </button>
    </form>

    </div>
  );
}
