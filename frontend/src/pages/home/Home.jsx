import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/home/banner/Banner";
import AboutBanner from "../../components/home/aboutBanner/AboutBanner";
import Admission from "../../components/home/admission/Admission";
import News from "../../components/home/news/News";
import Footer from "../../components/footer/Footer";
import LatestEvents from "../../components/latestEvents/LatestEvents";

const Home = () => {

  return (
    <>
      <Navbar />
      <Banner />
      <AboutBanner />
      <Admission />
      {/* <News /> */}
      <LatestEvents  message="home" />
      <Footer />
    </>
  );
};

export default Home;
