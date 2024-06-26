import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 4,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    }
  },
  { timestamps: true, collection: 'Users' } // Specify your collection name here
);

const User = mongoose.model("User", userSchema);

export default User;
