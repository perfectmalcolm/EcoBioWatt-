// prisma/seed.js
import { PrismaClient } from "../src/generated/prisma/index.js"; // <- import from generated client
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Users
  await prisma.user.createMany({
    data: [
      { name: "Admin User", email: "admin@ecobio.com", role: "admin" },
      { name: "Technician", email: "tech@ecobio.com", role: "technician" },
    ],
  });

  // Activities (link to user id 1 and 2)
  await prisma.activity.createMany({
    data: [
      { message: "User logged in", userId: 1 },
      { message: "Energy log updated", userId: 1 },
      { message: "Revenue report viewed", userId: 2 },
    ],
  });

  // Energy logs
  await prisma.energyLog.createMany({
    data: [
      { value: 500.75 },
      { value: 620.12 },
      { value: 480.33 },
    ],
  });

  // Efficiency records
  await prisma.efficiency.createMany({
    data: [
      { score: 91.2 },
      { score: 88.5 },
      { score: 93.7 },
    ],
  });

  // Revenue records
  await prisma.revenue.createMany({
    data: [
      { amount: 1200.5 },
      { amount: 1350.0 },
      { amount: 1500.3 },
    ],
  });

  // System health snapshots
  await prisma.systemHealth.createMany({
    data: [
      { status: "Good", cpuUsage: 25.3, memory: 60.4, storage: 40.7 },
      { status: "Moderate", cpuUsage: 55.8, memory: 75.2, storage: 65.5 },
      { status: "Critical", cpuUsage: 90.2, memory: 95.8, storage: 85.4 },
    ],
  });

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
