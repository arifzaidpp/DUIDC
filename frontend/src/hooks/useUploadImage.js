import { useState } from "react";
import toast from "react-hot-toast";

const useUploadImage = (setAddImg) => {
  const [loading, setLoading] = useState(false);


  const addImg = async (images) => {
    const success = handleInputErrors(images);
    if (!success) return;
    setLoading(true);
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append('images', image);
      });

      const res = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success('Images uploaded successfully!');
      setAddImg(false)
    } catch (error) {
      console.log(error.message);
      toast.error(error.message.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addImg };
};

export default useUploadImage;

function handleInputErrors(images) {
  if (images.length === 0) {
    toast.error("Please select any image");
    return false;
  }

  const maxSize = 2 * 1024 * 1024;
  for (const img of images) {
    if (img.size > maxSize) {
      toast.error("File size should not exceed 2MB");
      return false;
    }
  }

  return true;
}
