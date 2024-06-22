import express from 'express';
import multer from 'multer';
import { addMember, getAllMembers, deleteMember, updateMember } from '../controllers/ihsas.controller.js';

const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to add a member
router.post('/add-member', upload.single('memberPhoto'), addMember);

// Route to fetch all members of a committee
router.get('/', getAllMembers);

// Route to delete a member
router.delete('/delete-member', deleteMember);

// Route to update a member
router.put('/update-member/:id', upload.single('memberPhoto'), updateMember);

export default router;
