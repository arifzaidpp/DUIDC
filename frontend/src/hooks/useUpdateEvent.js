import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateEvent = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateEvent = async (eventId, formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Failed to update event: ${res.statusText}`);
      }

      const data = await res.json();
      toast.success(data.message || 'Event updated successfully');
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.message || 'Failed to update event');
      setError(err.message || 'Failed to update event');
    } finally {
      setLoading(false);
    }
  };

  return { updateEvent, loading, error };
};

export default useUpdateEvent;
