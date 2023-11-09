import http from "node:http";
import dotenv from "dotenv";

import app from "./app";
import { mongoConnect } from "./services/mongo";

dotenv.config();

const PORT = process.env.NODE_DOCKER_PORT || 8080;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    server.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
}

startServer();
