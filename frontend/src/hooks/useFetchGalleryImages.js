import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchGalleryImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/gallery/images');
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
    };

    fetchImages();
  }, []);

  return { images, loading };
};

export default useFetchGalleryImages;
