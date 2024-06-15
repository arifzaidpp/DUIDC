import React from "react";
import EventListItem from "./EventListItem";

const EventsList = ({ events }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentDomRef = domRef.current;
    if (currentDomRef) {
      observer.observe(currentDomRef);
    }

    return () => {
      if (currentDomRef) {
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return (
    <section className="events py-10 pt-0">
      <div className="container mx-auto px-4">
        <div className="py-5">
          <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            <div className="ev-data">
              <div className="evLi-body">
                <div className="grid lg:grid-cols-1 gap-6">
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {events.length > 0 ? (
                      events.slice().reverse().map((event, index) => (
                        <EventListItem key={index} event={event} />
                      ))
                    ) : (
                      <div>No additional events available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </section>
  );
};

export default EventsList;
