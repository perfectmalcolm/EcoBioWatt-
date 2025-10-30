import cors from "cors";
import express from "express";
import activityRoutes from "./routes/activity.js";
import efficiencyRoutes from "./routes/efficiency.js";
import energyRoutes from "./routes/energy.js";
import healthRoutes from "./routes/health.js";
import overviewRoutes from "./routes/overview.js";
import revenueRoutes from "./routes/revenue.js";
import systemHealthRoutes from "./routes/systemHealth.js";
import fleetRoutes from "./routes/fleet.js";
import usersRoutes from "./routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/overview", overviewRoutes);
app.use("/api/energy", energyRoutes);
app.use("/api/efficiency", efficiencyRoutes);
app.use("/api/revenue", revenueRoutes);
app.use("/api/system-health", systemHealthRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/fleet", fleetRoutes);
app.use("/api/users", usersRoutes);

export default app;
