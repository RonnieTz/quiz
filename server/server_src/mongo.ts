import { connect, Schema, model } from "mongoose";
import "dotenv/config.js";

const password = process.env.MONGO_PASS!;

export const connectDB = async () => {
  try {
    await connect(
      `mongodb+srv://ronistzolis:${password}@cluster0.pwpagi7.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to database");
  } catch (err) {
    console.log("err");
  }
};

export const UserSchema = new Schema({
  username: String,
  password: String,
  token: String,
});

export const User = model("User", UserSchema);
