import React from 'react'
import './ProjectsList.css'
import { Element } from 'react-scroll'
import projects from '../projects.json'

const ProjectsList = () => (
    <Element name="projects">
        <section id="projects" data-spy="scroll" data-target="#header" data-offset="0">
            <div className="container mb-5">
                <h3 className="m-4">projects</h3>
                {projects.map(project => (
                    <article key={project.slug} className="project-card my-3">
                        <img src={process.env.PUBLIC_URL + '/images/' + project.image} alt="project logo" className="project-image" />

                        <div className="project-text">
                            <h3 className="project-title mt-3">{project.title} </h3>
                            <div className="project-description">{project.description} </div>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    </Element>
)

export default ProjectsList;