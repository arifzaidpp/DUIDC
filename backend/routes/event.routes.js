// routes/eventRoutes.js
import express from 'express';
import multer from 'multer';
import { addEvent, deleteEvent, getAllEvents, updateEvent } from '../controllers/event.controller.js';

const router = express.Router();

// Set up multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle adding an event
router.post('/upload', upload.single('eventImage'), addEvent);

// Route to handle updating an event
router.put('/:id', upload.single('eventImage'), updateEvent);

// Route to fetch all events
router.get('/events', getAllEvents);

// Route to delete an event by ID
router.delete('/:id', deleteEvent);

export default router;
