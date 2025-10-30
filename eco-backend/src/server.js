import app from "./app.js";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("EcoBioWatt backend running..."));

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
