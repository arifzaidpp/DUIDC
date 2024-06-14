import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

const useFetchGalleryImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery/images");
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Error fetching images');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return { images, loading, fetchImages };
};

export default useFetchGalleryImages;
