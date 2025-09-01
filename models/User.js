import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {timestamps : true}); // gives createdAt and updatedAt time when document is created and updated

export default mongoose.model("User", UserSchema);
