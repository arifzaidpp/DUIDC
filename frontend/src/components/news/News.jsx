import React from "react";
import "./News.css";
import Main from "./Main";
import SubMain from "./SubMain";
import SsMain from "./SsMain";

function News() {

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
    <section className="news-update">
      <div className="container news">
        <div className="spacer"></div>
        <div className="p-5">
          <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            <div className="n-head grid grid-cols-2">
              <div className="left-item">
                <h3 className="nu-heading  text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                  News & Updates
                </h3>
                <div className="nu-heading-divider"></div>
              </div>
              <div className="right-item">
                <div className="nu-hero-btns">
                  <button
                    type="button"
                    className="nu-red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    View all news
                    <span className="button-icon">
                      <i className="fas fa-long-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="n-body grid lg:grid-cols-2 grid-flow-col gap-7">
            <Main />

            <div className="grid grid-rows-2 grid-flow-col gap-7">
              <SubMain />
              <SsMain />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
