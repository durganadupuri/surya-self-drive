import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await context.params;
    const id = Number(rawId);

    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    });

    if (!vehicle) {
      return NextResponse.json(
        { error: "Vehicle not found" },
        { status: 404 }
      );
    }

    // Delete related pricing first (important)
    await prisma.vehiclePricing.deleteMany({
      where: { vehicleId: id },
    });

    // Delete vehicle
    await prisma.vehicle.delete({
      where: { id },
    });

    // Redirect back to admin
    return NextResponse.redirect(new URL("/admin", _req.url));
  } catch (error) {
    console.error("DELETE VEHICLE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete vehicle" },
      { status: 500 }
    );
  }
}
