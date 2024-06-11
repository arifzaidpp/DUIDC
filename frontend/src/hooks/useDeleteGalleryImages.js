import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useDeleteGalleryImages = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const DeleteImages = async () => {
        setLoading(true);
        try {
          const response = await fetch("/api/deleteImages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ imageIds: selectedImages }),
          });
          if (response.ok) {
            toast.error("Images deleted successfully!");
            onclose(); // Close the modal
            // Optionally, refetch the images or update the state to remove deleted images
          } else {
            toast.error("Failed to delete images.");
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          toast.error("An error occurred while deleting images.");
        } finally {
            setLoading(false);
          }
      };

    DeleteImages();
  }, []);

  return { loading };
};

export default useDeleteGalleryImages;




