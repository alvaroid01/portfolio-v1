import React from 'react'
import './Skills.sass'
import ReactLogo from '../../../assets/images/icons/react-js.svg'
import ReduxLogo from '../../../assets/images/icons/redux.svg'
import SassLogo from '../../../assets/images/icons/sass.svg'
import JestLogo from '../../../assets/images/icons/jest.svg'
import GitLogo from '../../../assets/images/icons/git.svg'
import HTMLLogo from '../../../assets/images/icons/html.svg'
import CSSLogo from '../../../assets/images/icons/css.svg'
import JavaScriptLogo from '../../../assets/images/icons/javascript.svg'

import NodeLogo from '../../../assets/images/icons/node-js.svg'
import ExpressLogo from '../../../assets/images/icons/expressjs.svg'
import DockerLogo from '../../../assets/images/icons/docker.svg'

const Skills = () => {
    return (
        <div className='skills' id='projects'>
            <p className='skills-title'>My tech stack</p>
            <div className='skills-grid'>
                <div className='item'>
                    <img src={ReactLogo} alt='logo' />
                    <h1>React</h1>
                </div>
                <div className='item'>
                    <img src={ReduxLogo} alt='logo' />
                    <h1>Redux</h1>
                </div>
                <div className='item'>
                    <img src={SassLogo} alt='logo' />
                    <h1>Sass</h1>
                </div>

                <div className='item'>
                    <img src={JestLogo} alt='logo' />
                    <h1>Jest</h1>
                </div>
                <div className='item'>
                    <img src={GitLogo} alt='logo' />
                    <h1>React</h1>
                </div>
                <div className='item'>
                    <img src={HTMLLogo} alt='logo' />
                    <h1>HTML5</h1>
                </div>
                <div className='item'>
                    <img src={CSSLogo} alt='logo' />
                    <h1>CSS3</h1>
                </div>
                <div className='item'>
                    <img src={JavaScriptLogo} alt='logo' />
                    <h1>JavaScript</h1>
                </div>
            </div>

            <p className='other-skills-title'>Tech in comfortable with</p>
            <div className='other-skills-grid'>
                <div className='item'>
                    <img src={NodeLogo} alt='logo' />
                    <h1>Node</h1>
                </div>
                <div className='item'>
                    <img src={ExpressLogo} alt='logo' />
                    <h1>Express</h1>
                </div>
                <div className='item'>
                    <img src={DockerLogo} alt='logo' />
                    <h1>Docker</h1>
                </div>

             
                </div>
        </div>
    )
}

export default Skills