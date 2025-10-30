import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const revenues = await prisma.revenue.findMany({
      orderBy: { timestamp: "desc" },
    });
    res.json(revenues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch revenue data" });
  }
});

export default router;
