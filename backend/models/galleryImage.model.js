import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema({
  image: Buffer
}, { collection: 'GalleryImages' }); // Specify your collection name here

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;