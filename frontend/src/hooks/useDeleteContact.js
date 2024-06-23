import { useState } from 'react';
import toast from 'react-hot-toast';

const useDeleteContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteContactById = async (contactIds) => {
    setLoading(true);
    setError(null);

    try {
      // Assuming `/api/contact` supports batch deletion, send an array of IDs
      const response = await fetch(`/api/contact`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactIds }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete contacts');
      }

      setLoading(false);
      toast.success('Contacts deleted successfully'); // Success toast notification
      return true; // Indicate success
    } catch (error) {
      console.error('Error deleting contacts:', error.message);
      setError('Failed to delete contacts');
      setLoading(false);
      toast.error('Failed to delete contacts'); // Error toast notification
      return false; // Indicate failure
    }
  };

  return { deleteContactById, loading, error };
};

export default useDeleteContact;
