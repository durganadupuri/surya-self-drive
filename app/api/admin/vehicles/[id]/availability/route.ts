import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await context.params;

    console.log("RAW PARAM:", rawId);

    const id = Number(rawId);
    console.log("PARSED ID:", id);

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

    const updated = await prisma.vehicle.update({
      where: { id },
      data: {
        isAvailable: !vehicle.isAvailable,
      },
    });

    console.log("UPDATED VEHICLE:", updated);
    return NextResponse.redirect(
      new URL("/admin", _req.url)
    );

  } catch (error) {
    console.error("🔥 ERROR STACK:", error);
    return NextResponse.json(
      { error: "Failed to update availability" },
      { status: 500 }
    );
  }
}
