import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchIhsas = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIhsas = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ihsas'); // Adjust URL as per your backend route
      if (!response.ok) {
        throw new Error('Failed to fetch members');
      }
      const data = await response.json();
      setMembers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      toast.error('Error fetching members');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIhsas();
  }, []); // Run once on component mount

  return { members, loading, error, fetchIhsas }; // Include fetchMembers in the return object
};

export default useFetchIhsas;
