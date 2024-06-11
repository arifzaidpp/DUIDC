import { useState } from 'react';
import toast from 'react-hot-toast';

const useDeleteGalleryImages = (selectedImages, onClose) => {
  const [loading, setLoading] = useState(false);

  const deleteImages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/gallery/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageIds: selectedImages }),
      });
      if (response.ok) {
        toast.success('Images deleted successfully!');
        onClose(); // Close the modal
        // Optionally, refetch the images or update the state to remove deleted images
      } else {
        toast.error('Failed to delete images.');
      }
    } catch (error) {
      console.error('Error deleting images:', error);
      toast.error('An error occurred while deleting images.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteImages };
};

export default useDeleteGalleryImages;
