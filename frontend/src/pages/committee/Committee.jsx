import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/members/Members";
import useFetchMembers from "../../hooks/useGetAllCommittee";

const Committee = () => {
  const { members, loading, error, fetchMembers } = useFetchMembers();
  return (
    <>
      <Navbar />
      {loading && members.length === 0 ? (
              <p>Loading...</p>
            ) : error && members.length === 0 ? (
              <p>Error: {error}</p>
            ) : ( members.length !== 0 ? (
        <>
          <Members data={members} />
        </>
     ) : ("") ) }
      <Footer />
    </>
  );
};

export default Committee;
