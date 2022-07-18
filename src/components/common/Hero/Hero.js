import React from 'react'
import './Hero.sass'
import profilePicture from '../../../assets/images/pfp.jpg'
import Skills from '../SkillsLayout/Skills'
const Hero = () => {
    return (
        <div className='hero-content' id='main'>
            <div className='hero'>

                <div className='hero-text'>
                    <p className='main-text'>Hi there, my name is <b>Alvaro</b></p>
                    <hr />
                    <p className='sub-text'>I'm a <b>Software Developer</b>. I mainly develop using React.js as frontend framework although I ocassionally
                        build fullstack aplications using Node and Express. <br />
                        I love <b>creating software and web aplications</b> as much as engineering my way throught problems.
                        This coding journey of mine started 3 years ago when upon looking for careers I decided to,
                        instead of going for a uni degree like all my other collegues, getting myself into a 2 years web and app programming course.
                        Ever since that very moment I haven't stop <b>learning each and every day</b> aiming to become a <b>better developer</b>.</p>
                    <button><a href='#projects'>My projects</a></button>
                </div>
                <div className='hero-image'>
                    <img src={profilePicture} />
                </div>
            </div>
           
        </div>
    )


}

export default Hero