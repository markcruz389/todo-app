import http from "node:http";
import dotenv from "dotenv";

import app from "./app";
import { mongoConnect } from "./services/mongo";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect(MONGO_URL);
    server.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
}

startServer();
