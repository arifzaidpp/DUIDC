import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAddEvent = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addEvent = async (formData) => {
    if (!(formData instanceof FormData)) {
      toast.error("Invalid form data");
      return;
    }

    const images = formData.get('eventImage');
    if (!images) {
      toast.error("Please select an image");
      return;
    }

    if (!handleInputErrors(images)) return;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/events/upload", {
        method: 'POST',
        body: formData,
        limits: {
          fileSize: 2 * 1024 * 1024, // 2MB limit
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success('Event added successfully!');
      window.location.href = '/admin/events';
      onClose();
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addEvent, loading, error };
};

export default useAddEvent;

function handleInputErrors(image) {
  if (!image) {
    toast.error("Please select an image");
    return false;
  }

  const maxSize = 2 * 1024 * 1024; // 2MB
  if (image.size > maxSize) {
    toast.error("File size should not exceed 2MB");
    return false;
  }

  return true;
}
