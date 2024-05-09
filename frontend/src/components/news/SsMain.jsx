import React from "react";

const SsMain = () => {
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
      <figure className="nu-ss-main relative transition-all duration-300 cursor-pointer">
        <a >
          <div className="nu-ss-item-img overflow-hidden bg-cover bg-no-repeat">
            <img
              className="transition duration-900 ease-in-out object-fill hover:scale-110"
              src="/1.jpg"
              alt=""
            />
          </div>
        </a>
        <figcaption className="nu-ss-details relative mx-auto max-w-90 text-lg bottom-6">
          <div className="post-categories">
            <a href="" rel="category tag">
              <span className="cat-shape"></span>
              <span className="cat-name">Alumni</span>
            </a>
            <a href="" rel="category tag">
              <span className="cat-shape"></span>
              <span className="cat-name">Research</span>
            </a>
          </div>
          <div className="nu-ss-img-content nu-ss-item-heading  text-3xl nu-ss-s:text-lg nu-ss-m:text-2xl nu-ss-l:text-3xl">
            <p>
              Do you want to get notified when a new component is added to
              Flowbite?
            </p>
          </div>
          <div className="post-meta nu-m-hide">
            <div className="inner">
              <div className="post-meta-author">
                <a href="">
                  <span className="meta-value">Owen Christ</span>
                </a>
              </div>
              <div className="post-date">
                <span className="meta-value">Mar 17, 2021</span>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default SsMain;
