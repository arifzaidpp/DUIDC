import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
  image: Buffer
});

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;
