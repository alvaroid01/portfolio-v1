/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Hero from '../../components/common/Hero/Hero'
import Projects from '../../components/common/Projects/Projects'
import Skills from '../../components/common/SkillsLayout/Skills'
import useManageCount from '../../hooks/useManageCount'
import './Home.sass'
const Home = () => {
    const { handleClick,count, style } = useManageCount()
    return (
        <div className='home'>
            <Hero />
            <Skills />
            <Projects />
            <a className={count === 1 ? 'overlay-btn-bright' :
                "overlay-btn-dark"} onClick={handleClick} href={style}>
                <AiOutlineArrowDown size={30} color={count === 1 ? 'white' : "black"} />
            </a>
        </div>
    )
}

export default Home