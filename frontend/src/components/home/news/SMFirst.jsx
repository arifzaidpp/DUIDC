import React from "react";

const SMFirst = () => {
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
      <figure className="nu-sub-main relative transition-all duration-300 cursor-pointer">
        <a >
          <div className="nu-sub-item-img overflow-hidden bg-cover bg-no-repeat">
            <img
              className="transition duration-900 ease-in-out object-fill hover:scale-110"
              src="/1.jpg"
              alt=""
            />
          </div>
        </a>
        <figcaption className="nu-sub-details relative max-w-90 text-lg bottom-20">
          <div className="post-categories">
            <a href="" rel="category tag">
              <span className="cat-shape"></span>
              <span className="cat-name">Ihsas</span>
            </a>
            <a href="" rel="category tag">
              <span className="cat-shape"></span>
              <span className="cat-name">Research</span>
            </a>
          </div>
          <div className="nu-img-content nu-sub-item-heading  text-3xl nu-sub-s:text-lg nu-sub-m:text-2xl nu-sub-l:text-3xl">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default SMFirst;
