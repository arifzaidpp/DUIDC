import React, { useState } from "react";
import EventListItem from "./EventListItem";

const EventsList = ({ events }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState("");

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

  const openImagePopup = (imageSrc) => {
    setPopupImageSrc(imageSrc);
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
    setPopupImageSrc("");
  };

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
                        <EventListItem key={index} event={event} openImagePopup={openImagePopup} />
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
      {isImagePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1"
              onClick={closeImagePopup}
            >
              ✖️
            </button>
            <img
              src={popupImageSrc}
              alt="Event Full Size"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsList;
