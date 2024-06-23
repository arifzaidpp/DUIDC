import express from 'express';
import { getContacts, createContact, deleteContacts } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/send', createContact);
router.delete('/', deleteContacts); // Changed endpoint to handle batch deletion

export default router;
