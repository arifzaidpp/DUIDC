import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Members from "../../components/members/Members";
import Footer from "../../components/footer/Footer";
import useFetchDepartment from "../../hooks/useGetAllDepartment";

const Department = () => {
  const { members, loading, error, fetchDepartment } = useFetchDepartment();
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

export default Department;
