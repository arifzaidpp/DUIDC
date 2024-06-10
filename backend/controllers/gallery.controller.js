import GalleryImage from '../models/galleryImage.model.js';
import multer from 'multer';

const upload = multer();

export const addGalleryImages = [
  upload.array('images'),
  async (req, res) => {
    try {
      const imageDocs = req.files.map(file => ({
        image: file.buffer
      }));

      await GalleryImage.insertMany(imageDocs);
      console.log('Images saved successfully!');
      res.status(200).json({ message: 'Images saved successfully!' });
    } catch (error) {
      console.error('Error saving images:', error);
      res.status(500).json({ error: 'Error saving images' });
    }
  }
];

export const getGalleryImages = async (req, res) => {
  try {
    const images = await GalleryImage.find({});
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Error fetching images' });
  }
};