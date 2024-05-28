import React from "react";

const EventListItem = () => {
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
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <figure className=" eventList-sub relative max-w-2xl transition-all duration-300 cursor-pointer">
        <a href="#">
          <div className="img-gradient-sub">
            <img
              className="transition absolute duration-900 ease-in-out object-cover hover:scale-110"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </div>
        </a>
        <figcaption className="ev-text-btm-sub absolute px-8 text-lg text-black bottom-6">
          <div className="eventList-start-date">
            <span>Apr 19</span>
          </div>
          <h3 className="eventList-title-sub post-title-2-rows">
            <span>Roadmap to the Sustainable Development Goals</span>
          </h3>
          <div className="l-event-meta">
            <div className="meta-list">
              <div className="meta-item-sub eventList-time">
                2:30 pm - 3:30 pm
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default EventListItem;
