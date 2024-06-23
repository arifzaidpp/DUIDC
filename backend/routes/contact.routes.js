// routes/contact.route.js
import express from 'express';
import { getContacts, createContact, deleteContactById } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/send', createContact);
router.delete('/:id', deleteContactById);

export default router;
