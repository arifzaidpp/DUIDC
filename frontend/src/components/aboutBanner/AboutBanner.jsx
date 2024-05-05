import React from "react";
import "./AboutBanner.css";
import "../../js/animation";

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
          <div className="a-b grid lg:grid-cols-2 grid-flow-col gap-7">
            <div className="content">
              <div className="data">
                <div className="heading-wrap">
                  <h3 className="heading text-4xl s:text-lg m:text-2xl l:text-3xl x:text-4xl">
                    Welcome to Darul Uloom College!
                  </h3>
                </div>
                <div className="heading-divider"></div>
                <div className="description-wrap">
                  <p>
                    At the heart of all we do is a shared intellectual curiosity
                    and a common commitment to academic excellence. But UniCamp
                    is also known for its warm and energetic sense of community.{" "}
                  </p>
                  <p>
                    UniCamp is as varied in its people as it is in the
                    architecture and we love the stimulating diversity of both.
                    Being home to many talented, energetic students and
                    academics also generates its own creative and expanding
                    projects.
                  </p>
                </div>
              </div>
            </div>
            <div className=" a-right grid grid-rows-2 grid-flow-col gap-7">
              <div className="college relative hover:border-gray-700 border-transparent border-3 overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="transition duration-900 ease-in-out object-fill hover:scale-110"
                  src="/1.jpg"
                  alt=""
                />
                <div className="box-caption">
                  <h3 className="title"> Why DUIDC?</h3>
                </div>
              </div>
              <div className="highlight-students relative hover:border-gray-700 border-transparent border-3 overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="transition duration-900 ease-in-out object-fill hover:scale-110"
                  src="/2.jpg"
                  alt=""
                />
                <div className="box-caption">
                  <h3 className="title"> Meet Our Students</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
