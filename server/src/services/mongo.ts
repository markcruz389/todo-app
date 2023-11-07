import mongoose from "mongoose";

mongoose.connection.once("open", () =>
    console.log("MongoDB connection ready...")
);

mongoose.connection.on("error", (err) =>
    console.log(`MongoDB disconnected - ${err}`)
);

const mongoConnect = async (url = "") => {
    await mongoose.connect(url);
};

const mongoDisconnect = async () => {
    await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
