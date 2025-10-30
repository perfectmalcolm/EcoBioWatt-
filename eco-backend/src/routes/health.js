// src/routes/health.js
import { PrismaClient } from "../generated/prisma/index.js";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

// Fetch latest system health metrics
router.get("/", async (req, res) => {
  try {
    const healthData = await prisma.systemHealth.findMany({
      orderBy: { timestamp: "desc" },
      take: 5,
    });
    res.json(healthData);
  } catch (err) {
    console.error("Error fetching system health:", err);
    res.status(500).json({ error: "Failed to fetch system health" });
  }
});

export default router;
