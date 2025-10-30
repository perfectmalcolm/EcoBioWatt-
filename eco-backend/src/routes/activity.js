// src/routes/activity.js
import { PrismaClient } from "../generated/prisma/index.js";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

// Fetch all user activities
router.get("/", async (req, res) => {
  try {
    const activities = await prisma.activity.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(activities);
  } catch (err) {
    console.error("Error fetching activities:", err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

export default router;
