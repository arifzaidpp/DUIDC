import React, { useState } from "react";
import "./LatestEvents.css"; // Remove this import if all styles are converted to Tailwind

const LatestEvents = ({ home, events }) => {
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

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return eventDate.toLocaleDateString("en-US", options);
  };

  const convertTo12Hour = (time24) => {
    const [hours, minutes] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);
    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }
    if (hours12 === 0) {
      hours12 = 12;
    }
    return `${hours12}:${minutes} ${period}`;
  };

  return (
    <section className="events">
      <div className="container mx-auto">
        <div className="spacer py-5"></div>
        <div className="p-5">
          <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
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

              <div className="ev-body py-10">
                <div className="grid lg:grid-cols-2 gap-6">
                {events.length > 0 && (
                    <div
                      className={`fade-in-section ${
                        isVisible ? "is-visible" : ""
                      }`}
                      ref={domRef}
                    >
                      <figure className="relative max-w-full transition-all duration-300 cursor-pointer group overflow-hidden">
                        <a className="block relative">
                          <div
                            className="overflow-hidden rounded-lg"
                            onClick={() =>
                              openImagePopup(
                                `data:image/jpeg;base64,${arrayBufferToBase64(
                                  events[0].image.data
                                )}`
                              )
                            }
                          >
                            <img
                              className="transition duration-900 ease-in-out object-cover group-hover:scale-110 w-full h-96"
                              src={`data:image/jpeg;base64,${arrayBufferToBase64(
                                events[0].image.data
                              )}`}
                              alt={events[0].eventName}
                              onClick={() =>
                                openImagePopup(
                                  `data:image/jpeg;base64,${arrayBufferToBase64(
                                    events[0].image.data
                                  )}`
                                )
                              }
                            />
                          </div>
                        </a>
                        <figcaption className="absolute bottom-0 left-0 right-0 p-8 custom-gradient text-white transition duration-900 ease-in-out">
                          <div className="event-start-date mb-2">
                            <span className="bg-red-800 px-2 py-1 text-base text-white font-semibold uppercase w-20 inline-block">
                              {formatEventDate(events[0].eventDate)}
                            </span>
                          </div>
                          <h3 className="event-title text-4xl p-2 font-medium truncate">
                            {events[0].eventName}
                          </h3>
                          <div className="event-meta mt-2 text-sm">
                            <div className="event-time">
                              {`${convertTo12Hour(
                                events[0].eventStartTime
                              )} - ${convertTo12Hour(events[0].eventEndTime)}`}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Render additional events if there are more than 1 */}
                    {events.length >= 2 &&
                      events.slice(1, 3).map((event, index) => (
                        <div
                          key={index}
                          className={`fade-in-section ${
                            isVisible ? "is-visible" : ""
                          }`}
                          ref={domRef}
                        >
                          <figure className="relative max-w-2xl transition-all duration-300 cursor-pointer">
                            <a className="block relative">
                              <div
                                className="overflow-hidden"
                                onClick={() =>
                                  openImagePopup(
                                    `data:image/jpeg;base64,${arrayBufferToBase64(
                                      event.image.data
                                    )}`
                                  )
                                }
                              >
                                <img
                                  className="transition duration-900 ease-in-out object-cover hover:scale-110 w-full h-60 md:h-72 lg:h-[19rem]"
                                  src={`data:image/jpeg;base64,${arrayBufferToBase64(
                                    event.image.data
                                  )}`}
                                  alt={event.eventName}
                                  onClick={() =>
                                    openImagePopup(
                                      `data:image/jpeg;base64,${arrayBufferToBase64(
                                        event.image.data
                                      )}`
                                    )
                                  }
                                />
                              </div>
                            </a>
                            <figcaption className="-mt-5 z-50 relative">
                              <div className="event-start-date mb-2">
                                <span className="bg-red-800 px-2 py-1 pt-2 text-sm text-white font-semibold uppercase w-[4.5rem] inline-block">
                                  {formatEventDate(event.eventDate)}
                                </span>
                              </div>
                              <h3 className="event-title-sub text-2xl font-medium truncate text-black">
                                {event.eventName}
                              </h3>
                              <div className="event-meta mt-2 text-sm">
                                <div className="event-time text-gray-600">
                                  {`${convertTo12Hour(
                                    event.eventStartTime
                                  )} - ${convertTo12Hour(event.eventEndTime)}`}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      ))}
                  </div>
                </div>
                {home && home.message === "home" && (
                  <div className="ev-hero-btns pt-12 mx-auto max-w-xs">
                    <a href="/events">
                      <button
                        type="button"
                        className="bg-red-800 hover:bg-black text-white font-semibold text-base py-2.5 px-5 w-full rounded-none focus:outline-none"
                      >
                        View more events
                        <span className="button-icon ml-2">
                          <i className="fas fa-long-arrow-right"></i>
                        </span>
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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

export default LatestEvents;
