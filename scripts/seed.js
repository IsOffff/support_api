
import dotenv from "dotenv";
import { connectDB, disconnectDB } from "../src/config/database.js";
import RequestType from "../src/models/RequestType.js";

dotenv.config();

const data = [
  { code: "REQ001", name: "Reset mot de passe", priority: "low", category: "support", estimatedResponseTime: 2 },
  { code: "REQ002", name: "Création de compte", priority: "medium", category: "support", estimatedResponseTime: 4 },
  { code: "REQ003", name: "Incident critique", priority: "critical", category: "incident", estimatedResponseTime: 1 }
];

(async () => {
  try {
    await connectDB();
    await RequestType.deleteMany({});
    await RequestType.insertMany(data);
    console.log("✅ Seed inséré");
  } catch (e) {
    console.error(e);
  } finally {
    await disconnectDB();
  }
})();
