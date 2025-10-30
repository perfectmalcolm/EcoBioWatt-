import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const health = await prisma.systemHealth.findMany({
      orderBy: { timestamp: "desc" },
    });
    res.json(health);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch system health data" });
  }
});

export default router;
