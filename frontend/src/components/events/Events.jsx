import React from "react";
import "./Events.css";

const Events = () => {
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
    <section className="events">
      <div className="container">
        <div className="spacer"></div>
        <div className="p-5">
          <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            <div className="ev-data">
              <div className="ev-heading-wrap">
                <h3 className="ev-heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                  Upcoming Events
                </h3>
              </div>
              <div className="ev-heading-divider"></div>

              <div className="ev-body">
                <div className="grid lg:grid-cols-2 grid-flow-col gap-6">
                  <div
                    className={`fade-in-section ${
                      isVisible ? "is-visible" : ""
                    }`}
                    ref={domRef}
                  >
                    <figure className=" first relative max-w-2xl transition-all duration-300 cursor-pointer">
                      <a
                        href="#"
                        className="transition absolute duration-900 ease-in-out object-fill hover:scale-110"
                      >
                        <div className="img-gradient">
                          <img
                            className="transition absolute duration-900 ease-in-out object-fill hover:scale-110"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                            alt="image description"
                          />
                        </div>
                      </a>
                      <figcaption className="ev-text-btm absolute px-8 text-lg text-white bottom-6">
                        <div className="event-start-date">
                          <span>Apr 19</span>
                        </div>
                        <h3 className="event-title post-title-2-rows">
                          <span>
                            Roadmap to the Sustainable Development Goals
                          </span>
                        </h3>
                        <div className="event-meta">
                          <div className="meta-list">
                            <div className="meta-item event-time">
                              2:30 pm - 3:30 pm
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="grid md:grid-cols-2 grid-flow-col gap-6">
                    <div
                      className={`fade-in-section ${
                        isVisible ? "is-visible" : ""
                      }`}
                      ref={domRef}
                    >
                      <figure className=" sub relative max-w-2xl transition-all duration-300 cursor-pointer">
                        <a href="#">
                          <div className="img-gradient-sub">
                            <img
                              className="transition absolute duration-900 ease-in-out object-fill hover:scale-110"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                              alt="image description"
                            />
                          </div>
                        </a>
                        <figcaption className="ev-text-btm-sub absolute px-8 text-lg text-black bottom-6">
                          <div className="event-start-date">
                            <span>Apr 19</span>
                          </div>
                          <h3 className="event-title-sub post-title-2-rows">
                            <span>
                              Roadmap to the Sustainable Development Goals
                            </span>
                          </h3>
                          <div className="event-meta">
                            <div className="meta-list">
                              <div className="meta-item-sub event-time">
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
                      <figure className=" sub relative max-w-2xl transition-all duration-300 cursor-pointer">
                        <a href="#">
                          <div className="img-gradient-sub">
                            <img
                              className="transition absolute duration-900 ease-in-out object-fill hover:scale-110"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                              alt="image description"
                            />
                          </div>
                        </a>
                        <figcaption className="ev-text-btm-sub absolute px-8 text-lg text-black bottom-6">
                          <div className="event-start-date">
                            <span>Apr 19</span>
                          </div>
                          <h3 className="event-title-sub post-title-2-rows">
                            <span>
                              Roadmap to the Sustainable Development Goals
                            </span>
                          </h3>
                          <div className="event-meta">
                            <div className="meta-list">
                              <div className="meta-item-sub event-time">
                                2:30 pm - 3:30 pm
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="ev-hero-btns">
                  <button
                    type="button"
                    className="ev-red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    More UniCamp events
                    <span className="button-icon">
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
