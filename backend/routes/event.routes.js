import express from 'express';
import multer from 'multer';
import { addEvent, deleteEvent, getAllEvents } from '../controllers/event.controller.js';

const router = express.Router();

// Set up multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle adding an event
router.post('/upload', upload.single('eventImage'), addEvent);
router.get('/events', getAllEvents);
router.delete('/:id', deleteEvent);

export default router;
