import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EventsList from "../../components/eventsList/EventsList";
import LatestEvents from "../../components/latestEvents/LatestEvents";
import useFetchEvents from "../../hooks/useGetAllEvents";
import PastEvents from "../../components/eventsList/PastEvents";

const Events = () => {
  const [isVisible, setVisible] = React.useState(false);
  const { events, pastEvents, loading, error } = useFetchEvents();
  console.log(pastEvents);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  // console.log(events);
  // Skeleton component for each event item
 

  const EventSkeleton = () => (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl w-full animate-pulse">
      <div className="relative grid h-52 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 rounded-t-xl place-items-center">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          ></path>
        </svg>
      </div>
      <div className="p-6">
      <div className="block w-full h-3 mb-4 md:w-full md:h-3 bg-gray-300 rounded-full"></div>
        <div className="block w-full h-2 mb-2 md:w-full md:h-2 bg-gray-300 rounded-full"></div>
        <div className="block w-full h-2 mb-2 md:w-full md:h-2 bg-gray-300 rounded-full"></div>
        <div className="block w-full h-2 mb-2 md:w-full md:h-2 bg-gray-300 rounded-full"></div>
        <div className="block w-full h-2 mb-2 md:w-full md:h-2 bg-gray-300 rounded-full"></div>
      </div>
      <div className="p-6 pt-0">
        <button
          disabled
          tabIndex="-1"
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-full bg-gray-300 shadow-none hover:shadow-none"
          type="button"
        >
          &nbsp;
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {loading && (
        <section className="events">
          <div className="container mx-auto">
            <div className="spacer py-5"></div>
            <div className="p-5">
              <div
                className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
              >
                <div className="ev-data text-center relative">
                  <div className="ev-heading-wrap">
                    <h3 className="ev-heading font-bold text-4xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                      Upcoming Events
                    </h3>
                  </div>
                  <div className="ev-heading-divider mb-2 -mt-2">
                    <span className="inline-block w-60 h-[3px] bg-red-800"></span>
                  </div>

                  <div className="ev-body py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <EventSkeleton />
  <EventSkeleton />
  <EventSkeleton />
  <EventSkeleton />
  {/* Add more skeletons as needed */}
</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <LatestEvents events={events.slice(0,3)} />
          <EventsList events={events.slice(3)} />
          <PastEvents events={pastEvents}/>
        </>
      )}
      <Footer />
    </>
  );
};

export default Events;
