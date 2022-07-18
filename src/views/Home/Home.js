/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Hero from '../../components/common/Hero/Hero'
import Projects from '../../components/common/Projects/Projects'
import Skills from '../../components/common/SkillsLayout/Skills'
import './Home.sass'
const Home = () => {

    const [count, setCount] = useState(2)
    const handleClick = () => {
        console.log(count)
        if (count !== 0) {
            setCount(count - 1)
        }
        else {
            setCount(2)
        }
    }


    /* {{document.getElementById("btn-overlay").style.display = "block"}} */
    return (
        <div className='home'>
            <Hero />
            <Skills />
            <Projects />
            <a className={count === 1 ? "overlay-btn-bright" : "overlay-btn-dark"} onClick={handleClick} href={
                count === 2 ? '#main' :
                    count === 1 ? "#skills" :
                        count === 0 ? '#projects' : ""}>
                <AiOutlineArrowDown size={30} color={count === 1 ? 'white' : "black"} />
            </a>


        </div>
    )
}

export default Home