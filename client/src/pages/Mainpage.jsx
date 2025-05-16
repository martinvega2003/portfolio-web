import React from 'react'
import HeroSection from './section/HeroSection'
import AboutMeSection from './section/AboutMeSection'
import SoftSkillsSection from './section/SoftSkillsSection'
import CVSection from './section/CVSection'

const Mainpage = () => {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SoftSkillsSection />
      <CVSection />
    </main>
  )
}

export default Mainpage