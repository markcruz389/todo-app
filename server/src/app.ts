import path from "node:path";
import express from "express";
import cors from "cors";

import api from "./routes/v1";

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:8000" }));

app.use(express.json());

// Static build files
app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/api/v1", api);

export default app;
