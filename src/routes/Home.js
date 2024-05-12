import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
import ExploreHero from '../components/ExploreHero'
import MarsHero from '../components/MarsHero'
import Apod from '../components/Apod'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Video />
        <ExploreHero/>
        <MarsHero/>
        <Apod/>
        <Footer />
    </div>
  )
}

export default Home