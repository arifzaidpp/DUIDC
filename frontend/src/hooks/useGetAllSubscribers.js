import { useState, useEffect } from 'react';

const useSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/subscribe'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch subscribers');
        }
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        setError(error.message || 'Failed to fetch subscribers');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return { subscribers, loading, error };
};

export default useSubscribers;
