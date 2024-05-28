import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/committee/members/Members";
import Data from "./Committee.json"

const Committee = () => {
  return (
    <>
      <Navbar />
      <Members title="Committee" data={Data}/>
      <Footer />
    </>
  );
};

export default Committee;
