import React from 'react'
import './ProjectCard.sass'
import proeject01 from '../../../assets/images/project01.jpeg'
import ReactLogo from '../../../assets/images/icons/react-js.svg'
import ReduxLogo from '../../../assets/images/icons/redux.svg'
import SassLogo from '../../../assets/images/icons/sass.svg'
import JestLogo from '../../../assets/images/icons/jest.svg'
const ProjectCard = (props) => {
    return (
        <div className='projects-content'>
            
            <div className='projects-grid'>
                <div className='project-item'>

                    <div className='project-img'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='project-container'>
                        <h1>{props.title}</h1>
                        <p className='project-desc'>{props.description}</p>
                        <div className='tech-row'>
                            <div>
                                <h1>Tech used: <b>{props.tech}</b></h1>
                            </div>
                           {/*  <div className='tech-icons'>
                                <div >
                                    <img src={ReactLogo} alt='' />
                                </div>
                                <div>
                                    <img src={SassLogo} alt='' />
                                </div>
                                <div>
                                    <img src={JestLogo} alt='' />
                                </div>
                            </div>
 */}

                        </div>
                    </div>

                </div>

               
            </div>
        </div>

    )
}

export default ProjectCard