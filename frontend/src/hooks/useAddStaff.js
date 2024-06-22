import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddStaff = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addStaff = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/staff/add-member', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add member');
      }

      const data = await response.json();
      if (data.message === 'Member added successfully') {
        toast.success('Member added successfully');
        onClose(); // Close modal or perform any other action on success
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { addStaff, loading, error };
};

export default useAddStaff;
