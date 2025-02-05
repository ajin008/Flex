import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String, // This will store the URL or path to the image
    default: "", // Optional: Set a default value if needed
  },
});
