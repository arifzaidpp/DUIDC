// useDeleteEvent.js
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export default function useDeleteEvent() {
  const deleteEvent = useCallback(async (eventId) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the event.');
      }
      toast.success('Event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error(`Error deleting event: ${error.message}`);
    }
  }, []);

  return { deleteEvent };
}
