import React, { useEffect } from 'react'
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import MembersList from '../../adminComponents/members/MembersList'
import useFetchStaff from '../../hooks/useGetStaff';

const StaffsList = () => {
  
  const { members, loading, error, fetchStaff } = useFetchStaff(); // Fetch members here

  useEffect(() => {
    fetchStaff(); // Fetch members when component mounts
  }, []);

  return (
    <>
    <Sidebar/>
    <MembersList members={members} loading={loading} error={error} fetchMembers={fetchStaff} page="staffs" />
    </>
  )
}

export default StaffsList