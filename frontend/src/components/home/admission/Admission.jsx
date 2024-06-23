import React from "react";

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
    <section className="admission bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/home-06-section-apply-bg.jpg')" }}>
      <div
        className={`fade-in-section transition-opacity ease-out duration-400 transform transition-transform duration-900 ${isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-16 invisible"}`}
        ref={domRef}
      >
        <div className="admission-wrap py-20">
          <div className="ad-content relative p-14 shadow-none bg-white max-w-3xl mx-auto">
            <div className="absolute top-5 left-5 right-5 bottom-5 border border-gray-200"></div>
            <div className="ad-data text-center relative">
              <div className="ad-heading-wrap">
                <h3 className="ad-heading text-4xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold">Apply for Admissions</h3>
              </div>
              <div className="ad-heading-divider mt-4">
                <div className="w-16 h-1 bg-red-700 mx-auto"></div>
              </div>
              <div className="ad-description-wrap mt-9 text-lg font-normal leading-relaxed text-gray-600">
                <p>
                  At Darul Uloom College we don’t expect intelligence to come in any particular shape or form. We’re looking for future students who are inquisitive, passionate, original and determined to grow.
                </p>
              </div>
              <div className="ad-hero-btns pt-10 mx-auto max-w-xs">
                <a href="https://dhiu.in/secondary-1.html">
                  <button
                    type="button"
                    className="ad-red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2 bg-red-700 hover:bg-black"
                  >
                    Apply now
                    <span className="button-icon ml-3">
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
