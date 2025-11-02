import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import requestTypesRouter from "./routes/requestTypes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/request-types", requestTypesRouter);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  (async () => {
    try {
      await connectDB();
      app.listen(PORT, () => console.log(` API : http://localhost:${PORT}`));
    } catch (e) {
      console.error("Erreur de démarrage :", e);
      process.exit(1);
    }
  })();
}

export default app;
