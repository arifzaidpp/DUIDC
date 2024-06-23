import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/members/Members";
import useFetchIhsas from "../../hooks/useGetAllIhsas";

const Ihsas = () => {
  const { members, loading, error, fetchDepartment } = useFetchIhsas();
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

export default Ihsas;
