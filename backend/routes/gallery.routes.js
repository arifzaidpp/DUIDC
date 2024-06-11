import express from "express";
import { addGalleryImages, deleteGalleryImages, getGalleryImages } from "../controllers/gallery.controller.js";

const router = express.Router();


router.post('/upload', addGalleryImages);
router.get('/images', getGalleryImages);
router.post('/delete', deleteGalleryImages);

export default router;
