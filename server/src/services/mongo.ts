import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const MONGO_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose.connection.once("open", () =>
    console.log("MongoDB connection ready...")
);

mongoose.connection.on("error", (err) =>
    console.log(`MongoDB disconnected - ${err}`)
);

const mongoConnect = async () => {
    await mongoose.connect(MONGO_URL);
};

const mongoDisconnect = async () => {
    await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
