import React from 'react'
import HeroSection from './section/HeroSection'
import AboutMeSection from './section/AboutMeSection'
import SoftSkillsSection from './section/SoftSkillsSection'
import CVSection from './section/CVSection'
import FieldsSection from './section/FieldsSection'

const Mainpage = () => {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SoftSkillsSection />
      <CVSection />
      <FieldsSection />
    </main>
  )
}

export default Mainpage