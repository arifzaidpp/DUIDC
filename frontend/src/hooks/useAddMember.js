import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddMember = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMember = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/committee/add-member', {
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

  return { addMember, loading, error };
};

export default useAddMember;
