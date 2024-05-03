import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="hero-text">
          <h1 className="hero-h1">
            Explore Your <mark>Potential</mark> & <mark>Talents</mark> in DUIDC
          </h1>
        </div>
        <div className="hero-btns">
          <div className="btn-group-vertical">
            <button
              type="button"
              className="red rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
            >
              Start your application
            </button>
            <button
              type="button"
              className="white rounded-none p-5 focus:outline-none text-white font-medium text-sm px-5 py-2.5 me-2 mb-2"
            >
              Request info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
