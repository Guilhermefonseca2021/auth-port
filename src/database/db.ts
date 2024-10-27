import mongoose from "mongoose";
import auth from "../config/auth";

const connectDB = () =>
  mongoose.createConnection(`${auth.mongo_uri}`).asPromise();

export default connectDB;
