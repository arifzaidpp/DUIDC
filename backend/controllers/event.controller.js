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

// Function to fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
};

// Function to delete an event by ID
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
};

// Function to update an event by ID
export const updateEvent = async (req, res) => {
  try {
    const { eventName, eventDate, eventStartTime, eventEndTime, eventDescription } = req.body;
    const eventImage = req.file?.buffer;

    const updatedEvent = {
      eventName,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      image: eventImage,
    };

    await Event.findByIdAndUpdate(req.params.id, updatedEvent);
    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
};
