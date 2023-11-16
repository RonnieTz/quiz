import { connect, Schema, model } from "mongoose";

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost/quiz");
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
