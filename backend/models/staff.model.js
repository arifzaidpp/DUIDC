import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  img: {
    type: Buffer,
    required: true,
  },
});

const subMemberSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  members: [memberSchema],
});

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mainMembers: [memberSchema],
  members: [subMemberSchema],
}, { collection: 'Staff' });

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
