import React, { useEffect } from 'react'
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import MembersList from '../../adminComponents/members/MembersList'
import useFetchIhsas from '../../hooks/useGetAllIhsas';

const IhsasList = () => {
  
  const { members, loading, error, fetchIhsas } = useFetchIhsas(); // Fetch members here

  useEffect(() => {
    fetchIhsas(); // Fetch members when component mounts
  }, []);

  return (
    <>
    <Sidebar/>
    <MembersList members={members} loading={loading} error={error} fetchMembers={fetchIhsas} page="ihsas" />
    </>
  )
}

export default IhsasList