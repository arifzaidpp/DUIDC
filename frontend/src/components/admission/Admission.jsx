import React from "react";
import "./Admission.css";

function Admission() {

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
    <section className="admission">
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <div className="admission-wrap">
          <div className="ad-content">
            <div className="ad-data">
              <div className="ad-heading-wrap">
                <h3 className="ad-heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                  Apply for Admissions
                </h3>
              </div>
              <div className="ad-heading-divider"></div>
              <div className="ad-description-wrap">
                <p>
                  At Darul Uloom College we don’t expect intelligence to come in
                  any particular shape or form. We’re looking for future
                  students who are inquisitive, passionate, original and
                  determined to grow.
                </p>
              </div>
              <div className="ad-hero-btns">
                <button
                  type="button"
                  className="ad-red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Apply now
                  <span className="button-icon">
                    <i className="fas fa-long-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
