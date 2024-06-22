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

const committeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mainMembers: [memberSchema],
  members: [subMemberSchema],
},{ collection: 'Committee' });

const Committee = mongoose.model("Committee", committeeSchema);

export default Committee;
