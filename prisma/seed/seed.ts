import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.vehiclePricing.deleteMany();
  await prisma.vehicleImage.deleteMany();
  await prisma.vehicle.deleteMany();
  await prisma.service.deleteMany();
  await prisma.contactInfo.deleteMany();

  // Vehicles
  const swift = await prisma.vehicle.create({
    data: {
      name: "Swift",
      brand: "Suzuki",
      modelYear: 2022,
      seaterType: 5,
      category: "STANDARD",
      description: "Comfortable 5-seater hatchback",
      imageUrl: "/images/swift.jpg",
    },
  });

  const innova = await prisma.vehicle.create({
    data: {
      name: "Innova Crysta",
      brand: "Toyota",
      modelYear: 2023,
      seaterType: 7,
      category: "LUXURY",
      description: "Premium 7-seater for family trips",
      imageUrl: "/images/innova.jpg",
    },
  });

  // Pricing
  await prisma.vehiclePricing.create({
    data: {
      vehicleId: swift.id,
      weekdayPrice: 1800,
      weekendPrice: 2200,
      priceType: "FIXED",
    },
  });

  await prisma.vehiclePricing.create({
    data: {
      vehicleId: innova.id,
      minPrice: 3000,
      maxPrice: 4000,
      priceType: "RANGE",
    },
  });

  // Services
  await prisma.service.createMany({
    data: [
      {
        title: "Luxury Car Rentals",
        description: "Premium vehicles for comfort travel",
      },
      {
        title: "Photography Events",
        description: "Cars available for shoots and events",
      },
    ],
  });

  // Contact info
  await prisma.contactInfo.create({
    data: {
      phonePrimary: "9876543210",
      phoneSecondary: "9123456780",
      address: "MVP Colony, Visakhapatnam",
      city: "Visakhapatnam",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
