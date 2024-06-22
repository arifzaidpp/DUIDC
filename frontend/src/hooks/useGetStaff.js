import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchStaff = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/staff'); // Adjust URL as per your backend route
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
    fetchStaff();
  }, []); // Run once on component mount

  return { members, loading, error, fetchStaff }; // Include fetchMembers in the return object
};

export default useFetchStaff;
