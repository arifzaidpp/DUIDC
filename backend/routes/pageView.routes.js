// routes/pageView.routes.js
import express from 'express';
import { getPageView, incrementPageView } from '../controllers/pageView.controller.js';

const router = express.Router();

router.post('/increment-view', incrementPageView);
router.get('/home', getPageView);

export default router;
