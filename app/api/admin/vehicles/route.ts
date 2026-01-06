import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      brand,
      modelYear,
      seaterType,
      category,
      imageUrl,
      weekdayPrice,
      weekendPrice,
    } = body;

    const vehicle = await prisma.vehicle.create({
      data: {
        name,
        brand,
        modelYear: Number(modelYear),
        seaterType: Number(seaterType),
        category,
        imageUrl,
        pricing: {
          create: {
            weekdayPrice: weekdayPrice ? Number(weekdayPrice) : null,
            weekendPrice: weekendPrice ? Number(weekendPrice) : null,
            priceType: "FIXED",
          },
        },
      },
      include: {
        pricing: true,
      },
    });

    return NextResponse.json(vehicle);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create vehicle" },
      { status: 500 }
    );
  }
}
