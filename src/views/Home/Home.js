import React from 'react'
import Hero from '../../components/common/Hero/Hero'
import Skills from '../../components/common/SkillsLayout/Skills'
import './Home.sass'
const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Skills/>       
       

    </div>
  )
}

export default Home