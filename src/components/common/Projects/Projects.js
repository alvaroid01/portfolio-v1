import React from 'react'
import './Projects.sass'

import ReactLogo from '../../../assets/images/icons/react-js.svg'
import ReduxLogo from '../../../assets/images/icons/redux.svg'
import SassLogo from '../../../assets/images/icons/sass.svg'
import JestLogo from '../../../assets/images/icons/jest.svg'
import ProjectCard from '../ProjectCard/ProjectCard'
import { esp } from '../../../assets/values/locales/esp'
const Projects = () => {
  return (
    <div id='projects' className='projects-content'>
      <p className='projects-title'>Personal projects</p>
      {esp.projects.map((item,idx)=>{
        return(
          <ProjectCard key= {idx} title={item.title} description={item.description} image={item.img} tech={item.tech}/>
        )
      })}
      
    </div>
  )
}

export default Projects