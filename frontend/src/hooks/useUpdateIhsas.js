import { useState } from 'react';
import toast from 'react-hot-toast';

const useUpdateIhsas = (onClose) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateIhsas = async (memberId, formData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/ihsas/update-member/${memberId}`, {
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

  return { updateIhsas, loading, error };
};

export default useUpdateIhsas;
