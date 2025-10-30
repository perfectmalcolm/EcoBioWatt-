import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const logs = await prisma.energyLog.findMany({
      orderBy: { timestamp: "desc" },
    });
    res.json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch energy logs" });
  }
});

export default router;
