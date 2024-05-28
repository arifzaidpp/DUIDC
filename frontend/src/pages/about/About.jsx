import React from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import AboutPage from "../../components/about/AboutPage";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
