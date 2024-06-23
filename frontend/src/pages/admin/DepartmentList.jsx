import React, { useEffect } from 'react'
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import MembersList from '../../adminComponents/members/MembersList'
import useFetchDepartment from '../../hooks/useGetAllDepartment';

const DepartmentList = () => {

  const { members, loading, error, fetchDepartment } = useFetchDepartment(); // Fetch members here

  useEffect(() => {
    fetchDepartment(); // Fetch members when component mounts
  }, []);

  return (
    <>
    <Sidebar/>
    <MembersList members={members} loading={loading} error={error} fetchMembers={fetchDepartment} page="department" />
    </>
  )
}

export default DepartmentList