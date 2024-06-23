// hooks/useDeleteContact.js
import { useState } from 'react';
import toast from 'react-hot-toast';

const useDeleteContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteContactById = async (contactId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/contact/${contactId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      setLoading(false);
      toast.success('Contact deleted successfully'); // Success toast notification
      return true; // Indicate success
    } catch (error) {
      console.error('Error deleting contact:', error.message);
      setError('Failed to delete contact');
      setLoading(false);
      toast.error('Failed to delete contact'); // Error toast notification
      return false; // Indicate failure
    }
  };

  return { deleteContactById, loading, error };
};

export default useDeleteContact;
