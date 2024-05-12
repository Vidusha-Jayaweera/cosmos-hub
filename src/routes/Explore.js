import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExploreCards from '../components/Explore'
import HeroImage from '../components/HeroImage'

const Explore = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='EXPLORE.' text='Dive deep into the universe' />
        <ExploreCards />
        <Footer />
    </div>
  )
}

export default Explore