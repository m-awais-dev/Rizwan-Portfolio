
import React from 'react'
import ProjectsCard from './constants/ProjectsCard'
import { ProjectInfo } from './constants/UserInfo'

const Projects = () => {
  return (
    <div className="px-16 mx-10 my-10 font-mono" id="projects">
            <h1 className="text-4xl text-center mb-10 font-bold text-white">Projects</h1>
            <div className="flex flex-wrap justify-between gap-4">
                {
                    ProjectInfo.map((project, index) =><ProjectsCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>
        </div>
  )
}

export default Projects