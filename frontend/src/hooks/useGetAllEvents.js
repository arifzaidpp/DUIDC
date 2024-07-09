import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
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

      // Parse the date and time, and combine them into a single Date object
      const parsedEvents = data.map(event => {
        const eventDate = new Date(event.eventDate);
        const [hours, minutes] = event.eventStartTime.split(':').map(Number);
        eventDate.setHours(hours, minutes);
        return { ...event, eventDate };
      });

      // Get the current date and time
      const now = new Date();

      // Separate past and future events
      const pastEventsList = [];
      const futureEventsList = [];

      parsedEvents.forEach(event => {
        if (new Date(event.eventDate) < now) {
          pastEventsList.push(event);
        } else {
          futureEventsList.push(event);
        }
      });

      // Sort future events based on the date and time nearest to the present date and time
      futureEventsList.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

      // Sort past events based on the date and time nearest to the present date and time
      pastEventsList.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));

      setEvents(futureEventsList);
      setPastEvents(pastEventsList);
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

  return { events, pastEvents, loading, error, fetchEvents }; // Include fetchEvents in the return object
};

export default useFetchEvents;
