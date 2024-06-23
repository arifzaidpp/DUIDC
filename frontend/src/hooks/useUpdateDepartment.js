import { useState } from 'react';
import toast from 'react-hot-toast';

const useUpdateDepartment = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDepartment = async (memberId, formData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/department/update-member/${memberId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Failed to update member: ${res.statusText}`);
      }

      const data = await res.json();
      toast.success(data.message || 'Member updated successfully');
      if (onClose) onClose();
    } catch (err) {
      toast.error(err.message || 'Failed to update member');
      setError(err.message || 'Failed to update member');
    } finally {
      setLoading(false);
    }
  };

  return { updateDepartment, loading, error };
};

export default useUpdateDepartment;
