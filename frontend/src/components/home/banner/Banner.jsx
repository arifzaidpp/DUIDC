import React from "react";
import "./Banner.css";

const Banner = () => {
  const [isVisible, setVisible] = React.useState(false);
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
      <section className="banner">
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={domRef}
        >
          <div className="hero-text">
            <h1 className="hero-h1">
            Welcome to <mark> Darul Uloom Islamic Da'wa</mark> College
            </h1>
          </div>
          <div className="hero-btns">
            <div className="btn-group-vertical">
              <a href="https://dhiu.in/secondary-1.html">
                <button
                  type="button"
                  className="red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Start your application
                </button>
              </a>
              <a href="/contact">
                <button
                  type="button"
                  className="white rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
