
import mongoose from "mongoose";

export const connectDB = async (uri = process.env.MONGO_URI) => {
  if (!uri) throw new Error("MONGO_URI non défini");
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};

export const clearDB = async () => {
  const { collections } = mongoose.connection;
  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
};
