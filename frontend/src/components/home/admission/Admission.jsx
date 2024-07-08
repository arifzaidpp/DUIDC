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
          <div className="admission-content">
            <div className="admission-data">
              <div className="admission-heading-wrap">
                <h3 className="admission-heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                  Apply for Admissions
                </h3>
              </div>
              <div className="admission-heading-divider"></div>
              <div className="admission-description-wrap">
                <p>
                DHIU enrolls only intelligent and talented students aged below 11½ who have completed/ are completing their five-year primary education provided at formal schools and recognized local Madrasas. Admission to the university campus/ affiliated colleges is based only on merit and intellectual potential of students that are evaluated through standard oral and written entrance tests. This is because, DHIU believes that only bright and intelligent students will be capable to pursue the extensive curricula adopted by DHIU. The calls for applications are made in the Arabic month of Sha’ban every year, while the entrance tests are held in the first week of Shawwal. The University offers a continuous stream of twelve-year course, starting from Secondary until Post Graduation. Therefore, it does not allow fresh admissions to higher levels.
                </p>
              </div>
              <div className="admission-hero-btns">
                <a href="https://dhiu.in/secondary-1.html">
                  <button
                    type="button"
                    className="admission-red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Apply now
                    <span className="button-icon">
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
