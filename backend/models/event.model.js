import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventStartTime: {
    type: String,
    required: true,
  },
  eventEndTime: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
  },
  image: {
    type: Buffer,
    required: true,
  },
}, { collection: 'Events' });

const Event = mongoose.model('event', eventSchema);

export default Event;
