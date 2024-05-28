import React from "react";
import "./EventsList.css"
import EventListItem from "./EventListItem";

const EventsList = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <>
      <section className="events">
        <div className="container">
          <div className="p-5">
            <div
              className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
              ref={domRef}
            >
              <div className="ev-data">
                <div className="evLi-body">
                  <div className="grid lg:grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      <EventListItem/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="spacer"></div>
        </div>
      </section>
    </>
  );
};

export default EventsList;
