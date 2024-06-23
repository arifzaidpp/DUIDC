import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/members/Members";
import useFetchStaff from "../../hooks/useGetStaff";

const Staff = () => {

  const { members, loading, error, fetchStaff } = useFetchStaff();
  return (
    <>
      <Navbar />
      {loading && members.length === 0 ? (
              <p>Loading...</p>
            ) : error && members.length === 0 ? (
              <p>Error: {error}</p>
            ) : ( members.length !== 0 ? (
        <>
        {console.log(members)}
          <Members data={members} />
        </>
     ) : ("") ) }
      <Footer />
    </>
  );
};

export default Staff;
