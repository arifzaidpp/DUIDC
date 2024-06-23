import express from 'express';
import { addSubscription, getAllSubscriptions } from '../controllers/subscribe.controller.js';

const router = express.Router();

// Route to add a new subscription
router.post('/', addSubscription);

// Route to fetch all subscriptions
router.get('/', getAllSubscriptions);

export default router;
