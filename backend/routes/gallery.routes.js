import express from "express";
import { addGalleryImages, getGalleryImages } from "../controllers/gallery.controller.js";

const router = express.Router();


router.post('/upload', addGalleryImages);
router.get('/images', getGalleryImages);

export default router;
