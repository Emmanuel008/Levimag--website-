import React from 'react'
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from 'components/Hero';
import AboutUs from 'components/features/AboutUs';
import Services from 'components/features/Services';
import Projects from 'components/features/Projects';
import Contact from 'components/features/Contact';
import Footer from 'components/footers/Footer';
const Home = () => {
  return (
    <AnimationRevealPage>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </AnimationRevealPage>
  )
}

export default Home
