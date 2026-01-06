import { prisma } from "@/lib/prisma";
import AddVehicleForm from "@/components/admin/AddVehicleForm";
export default async function AdminPage() {
  const vehicles = await prisma.vehicle.findMany({
    include: {
      pricing: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (<>
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Admin – Vehicles</h1>

      <div className="mt-8 grid gap-4">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="rounded-xl border border-border/60 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{v.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {v.brand} • {v.modelYear} • {v.seaterType}-seater
                </p>
              </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm ${
                      v.isAvailable ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {v.isAvailable ? "Available" : "Unavailable"}
                  </span>

                  <form
                    action={`/api/admin/vehicles/${v.id}/availability`}
                    method="post"
                  >
                    <button
                      formMethod="POST"
                      type="submit"
                      className="rounded-md border px-3 py-1 text-xs">
                      Toggle
                    </button>
                  </form>
                </div>
              <form action={`/api/admin/vehicles/${v.id}/delete`} method="post">
                <button
                  className="rounded-md border border-red-500 px-3 py-1 text-xs text-red-600"
                >
                  Delete
                </button>
              </form>

            </div>

            <div className="mt-2 text-sm">
              Weekday:{" "}
              {v.pricing?.weekdayPrice
                ? `₹${v.pricing.weekdayPrice}`
                : "—"}
              <br />
              Weekend:{" "}
              {v.pricing?.weekendPrice
                ? `₹${v.pricing.weekendPrice}`
                : "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
        <AddVehicleForm />

    </>
  );
}
