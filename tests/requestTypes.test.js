
import request from "supertest";
import app from "../src/server.js";
import { connectDB, clearDB, disconnectDB } from "../src/config/database.js";
import RequestType from "../src/models/RequestType.js";

beforeAll(async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/support_api_test";
  await connectDB(uri);
});

afterAll(async () => {
  await disconnectDB();
});

afterEach(async () => {
  await clearDB();
});

test("GET /health -> ok", async () => {
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
  expect(res.body.status).toBe("ok");
});

test("POST /api/request-types -> crée un type", async () => {
  const payload = { code: "RT001", name: "Test", priority: "high" };
  const res = await request(app).post("/api/request-types").send(payload);
  expect(res.status).toBe(201);
  expect(res.body.code).toBe("RT001");
});

test("GET /api/request-types -> retourne uniquement actifs", async () => {
  await RequestType.create({ code: "A1", name: "Actif 1", isActive: true });
  await RequestType.create({ code: "D1", name: "Inactif 1", isActive: false });
  const res = await request(app).get("/api/request-types");
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body[0].code).toBe("A1");
});
