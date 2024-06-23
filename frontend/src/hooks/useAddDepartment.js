import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddDepartment = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addDepartment = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/department/add-member', {
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

  return { addDepartment, loading, error };
};

export default useAddDepartment;
