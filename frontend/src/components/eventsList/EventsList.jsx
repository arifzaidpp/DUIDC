import React from "react";
import "./EventsList.css"

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
                      <div
                        className={`fade-in-section ${
                          isVisible ? "is-visible" : ""
                        }`}
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
                              <span>
                                Roadmap to the Sustainable Development Goals
                              </span>
                            </h3>
                            <div className="event-meta">
                              <div className="meta-list">
                                <div className="meta-item-sub eventList-time">
                                  2:30 pm - 3:30 pm
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>

                      <div
                        className={`fade-in-section ${
                          isVisible ? "is-visible" : ""
                        }`}
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
                              <span>
                                Roadmap to the Sustainable Development Goals
                              </span>
                            </h3>
                            <div className="event-meta">
                              <div className="meta-list">
                                <div className="meta-item-sub eventList-time">
                                  2:30 pm - 3:30 pm
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>

                      <div
                        className={`fade-in-section ${
                          isVisible ? "is-visible" : ""
                        }`}
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
                              <span>
                                Roadmap to the Sustainable Development Goals
                              </span>
                            </h3>
                            <div className="event-meta">
                              <div className="meta-list">
                                <div className="meta-item-sub eventList-time">
                                  2:30 pm - 3:30 pm
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>

                      <div
                        className={`fade-in-section ${
                          isVisible ? "is-visible" : ""
                        }`}
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
                              <span>
                                Roadmap to the Sustainable Development Goals
                              </span>
                            </h3>
                            <div className="event-meta">
                              <div className="meta-list">
                                <div className="meta-item-sub eventList-time">
                                  2:30 pm - 3:30 pm
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
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
