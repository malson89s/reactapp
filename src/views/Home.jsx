import React from 'react'


import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Slider from '../components/Slider'
import More from '../components/More'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'
import ClientTestimonials from '../components/ClientTestimonials'









const Home = () => {
  return (
    <>

      <Hero />
      <Brands/>
      <Features />
      <Slider />
      <More />
      <ClientTestimonials />
      <Faq />
      <Subscribe />
    </>
  )
}

export default Home