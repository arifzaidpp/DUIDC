import React from "react";
import "./AboutBanner.css";
import WhyDuidc from "./WhyDuidc";
import Students from "./Students";
import PrincipalMessege from "../principal-messege/PrincipalMessege";

function AboutBanner() {
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
    <section className="about-banner">
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <div className="a-banner container mx-auto">
          <div className="a-b grid lg:grid-cols-2 gap-7">
            <div className="content">
              <div className="data">
                <div className="heading-wrap">
                  <h3 className="heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                    Our Vision
                  </h3>
                </div>
                <div className="heading-divider"></div>
                <div className="description-wrap">
                  <p>
                    To be a leading educational institution committed to
                    propagate Islam all over the world.
                  </p>
                </div>
                <div className="heading-wrap">
                  <h3 className="heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                    Our Mission
                  </h3>
                </div>
                <div className="heading-divider"></div>
                <div className="description-wrap">
                  <p>
                    Ordaining a scholarship with high-quality Islamic education
                    through Moral Training (Tarbiyah) and effective Teaching
                    (Ta'lim) capable to propagate Islam by sophisticated means.
                  </p>
                </div>
              </div>
            </div>
            <div className=" a-right grid grid-rows-2 mt-0 grid-flow-col gap-7">
              <WhyDuidc />
              <Students />
            </div>
          </div>
          <div className="a-b">

          <PrincipalMessege />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
