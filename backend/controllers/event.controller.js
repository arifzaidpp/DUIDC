// controllers/event.controller.js
import Event from '../models/event.model.js';

// Function to add an event
export const addEvent = async (req, res) => {
  try {
    const { eventName, eventDate, eventStartTime, eventEndTime, eventDescription } = req.body;
    const eventImage = req.file.buffer;

    const newEvent = new Event({
      eventName,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      image: eventImage,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding event', error: error.message });
  }
};
