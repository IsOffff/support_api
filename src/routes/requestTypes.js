
import express from "express";
import RequestType from "../models/RequestType.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

router.get("/:id", async (req, res) => {
  const type = await RequestType.findById(req.params.id);
  if (!type) return res.status(404).json({ message: "Type non trouvé" });
  res.json(type);
});

router.post("/", async (req, res) => {
  try {
    const created = await RequestType.create(req.body);
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

export default router;
