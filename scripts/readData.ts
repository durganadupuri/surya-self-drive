import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const vehicles = await prisma.vehicle.findMany();

  console.log("Vehicles:");
  console.log(vehicles);
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
