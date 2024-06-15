import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import EventsList from '../../components/eventsList/EventsList';
import LatestEvents from '../../components/latestEvents/LatestEvents';
import useFetchEvents from '../../hooks/useGetAllEvents';

const Events = () => {
  const { events, loading, error } = useFetchEvents();

  return (
    <>
      <Navbar />
      {loading && <p>Loading events...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <LatestEvents events={events.slice(-3)} />
          <EventsList events={events.slice(0, -3)} />
        </>
      )}
      <Footer />
    </>
  );
};

export default Events;
