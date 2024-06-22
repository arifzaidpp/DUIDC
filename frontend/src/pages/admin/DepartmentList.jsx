import React from 'react'
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import MembersList from '../../adminComponents/members/MembersList'

const DepartmentList = () => {
  
  const { members, loading, error, fetchMembers } = useFetchMembers(); // Fetch members here

  useEffect(() => {
    fetchMembers(); // Fetch members when component mounts
  }, []);

  return (
    <>
    <Sidebar/>
    <MembersList members={members} loading={loading} error={error} fetchMembers={fetchMembers} />
    </>
  )
}

export default DepartmentList