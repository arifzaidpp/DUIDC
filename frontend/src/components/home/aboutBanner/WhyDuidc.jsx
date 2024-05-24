import React from "react";

function WhyDuidc() {
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
    </div>
  );
}

export default WhyDuidc;
