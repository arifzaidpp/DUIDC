import { useState } from 'react';
import toast from 'react-hot-toast';

const useDeleteMember = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteMember = async (memberId, memberRole) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/committee/delete-member', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberId, memberRole }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete member');
      }

      toast.success('Member deleted successfully');
    } catch (error) {
      setError(error.message || 'Failed to delete member');
      toast.error(`Error deleting member: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { deleteMember, loading, error };
};

export default useDeleteMember;
