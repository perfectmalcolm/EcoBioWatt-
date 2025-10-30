import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    console.log("Fetching energy logs...");
    const energyLogs = await prisma.energyLog.findMany();
    console.log("Energy logs fetched.");

    console.log("Fetching efficiency data...");
    const efficiencyData = await prisma.efficiency.findMany();
    console.log("Efficiency data fetched.");

    console.log("Fetching revenue data...");
    const revenueData = await prisma.revenue.findMany();
    console.log("Revenue data fetched.");

    console.log("Fetching system health data...");
    const systemHealthData = await prisma.systemHealth.findMany();
    console.log("System health data fetched.");

    res.json({ energy: energyLogs, efficiency: efficiencyData, revenue: revenueData, systemHealth: systemHealthData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

export default router;
