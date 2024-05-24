import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/committee/members/Members";

const Committee = () => {
  return (
    <>
      <Navbar />
      <Members />
      <Footer />
    </>
  );
};

export default Committee;
