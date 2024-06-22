import React, { useState, useEffect } from 'react';
import Sidebar from '../../adminComponents/sidebar/Sidebar';
import MembersList from '../../adminComponents/members/MembersList';
import useFetchMembers from '../../hooks/useGetAllCommittee';

const CommitteeList = () => {
  const { members, loading, error, fetchMembers } = useFetchMembers(); // Fetch members here

  useEffect(() => {
    fetchMembers(); // Fetch members when component mounts
  }, []);

  return (
    <>
      <Sidebar />
      <MembersList members={members} loading={loading} error={error} fetchMembers={fetchMembers} page="committee" />
    </>
  );
};

export default CommitteeList;
