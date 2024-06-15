import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/events/events'); // Adjust the endpoint as per your backend setup
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      toast.error('Error fetching events');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []); // Run once on component mount

  return { events, loading, error, fetchEvents }; // Include fetchEvents in the return object
};

export default useFetchEvents;
