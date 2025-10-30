import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const efficiencies = await prisma.efficiency.findMany({
      orderBy: { timestamp: "desc" },
    });
    res.json(efficiencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch efficiency data" });
  }
});

export default router;
