import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import EventsList from '../../components/eventsList/EventsList'
import LatestEvents from '../../components/latestEvents/LatestEvents'

const Events = () => {
  return (
    <>
    <Navbar/>
    <LatestEvents />
    <EventsList />
    <Footer/>
    </>
  )
}

export default Events