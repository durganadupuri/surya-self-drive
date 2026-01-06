import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const vehicleId = Number(id);

    if (Number.isNaN(vehicleId)) {
      return NextResponse.json({ error: "Invalid vehicle ID" }, { status: 400 });
    }

    const formData = await req.formData();

    const priceType = formData.get("priceType") as "FIXED" | "RANGE";

    const weekdayPriceRaw = formData.get("weekdayPrice")?.toString();
    const weekendPriceRaw = formData.get("weekendPrice")?.toString();

    const weekdayPrice = weekdayPriceRaw ? Number(weekdayPriceRaw) : null;
    const weekendPrice = weekendPriceRaw ? Number(weekendPriceRaw) : null;


    const minPriceRaw = formData.get("minPrice")?.toString();
    const maxPriceRaw = formData.get("maxPrice")?.toString();

    const minPrice = minPriceRaw ? Number(minPriceRaw) : null;
    const maxPrice = maxPriceRaw ? Number(maxPriceRaw) : null;

    // 🔒 Validation
    if (priceType === "FIXED") {
      if (!weekdayPrice || !weekendPrice) {
        return NextResponse.json(
          { error: "Weekday and weekend prices are required for FIXED pricing" },
          { status: 400 }
        );
      }
    }

    if (priceType === "RANGE") {
      if (minPrice === null || maxPrice === null) {
        return NextResponse.json(
          { error: "Min and max prices are required for RANGE pricing" },
          { status: 400 }
        );
      }
    }

    const existingPricing = await prisma.vehiclePricing.findUnique({
      where: { vehicleId },
    });

    if (existingPricing) {
      await prisma.vehiclePricing.update({
        where: { vehicleId },
        data: {
          priceType,
          weekdayPrice,
          weekendPrice,
          minPrice,
          maxPrice,
        },
      });
    } else {
      await prisma.vehiclePricing.create({
        data: {
          vehicleId,
          priceType,
          weekdayPrice,
          weekendPrice,
          minPrice,
          maxPrice,
        },
      });
    }

    return NextResponse.redirect(new URL("/admin", req.url));
  } catch (error) {
    console.error("PRICING UPDATE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save pricing" },
      { status: 500 }
    );
  }
}
