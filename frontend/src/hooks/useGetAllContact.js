import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      toast.error('Error fetching data'); // Toast notification for error
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  return { data, loading, error, fetchData }; // Include fetchData in the return object
};

export default useFetchData;
