import React from "react";

const EventListItem = ({ event }) => {
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
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <figure className="relative w-full transition-all duration-300 cursor-pointer">
        <a href="#">
          <div className="img-gradient-sub overflow-hidden">
            <img
              className="transition duration-900 ease-in-out object-cover hover:scale-110 w-full h-48 md:h-64"
              src={`data:image/jpeg;base64,${arrayBufferToBase64(
                event.image.data
              )}`}
              alt={event.eventName}
            />
          </div>
        </a>
        <figcaption className="-mt-5 text-black text-center relative z-40">
          <div className="eventList-start-date mb-2">
            <span className="bg-red-800 px-2 py-1 pt-2 text-sm text-white font-semibold uppercase w-[4.5rem] inline-block">
              {formatEventDate(event.eventDate)}
            </span>
          </div>
          <h3 className="eventList-title-sub text-lg font-medium truncate">
            {event.eventName}
          </h3>
          <div className="l-event-meta mt-2 text-sm">
            <div className="meta-item-sub eventList-time">
              {`${convertTo12Hour(event.eventStartTime)} - ${convertTo12Hour(
                event.eventEndTime
              )}`}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default EventListItem;
