import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/home/banner/Banner";
import AboutBanner from "../../components/home/aboutBanner/AboutBanner";
import Admission from "../../components/home/admission/Admission";
import News from "../../components/home/news/News";
import Footer from "../../components/footer/Footer";
import LatestEvents from "../../components/latestEvents/LatestEvents";
import useFetchEvents from "../../hooks/useGetAllEvents";

const Home = () => {
  const { events, loading, error } = useFetchEvents();

  return (
    <>
      <Navbar />
      <Banner />
      <AboutBanner />
      <Admission />
      <LatestEvents home={{ message: "home" }} events={events.slice(0, 3)} />
      <Footer />
    </>
  );
};

export default Home;
