import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
        {
            title: "NFT Fractions DEX",
            description: "NFT Fractions DEX description\n" +
                "sdfsdf",
            paragraphs: [
                {
                    text: "text1 blabala"
                },
                {
                    text: "text2343 blabala23423"
                }
            ]
        },
        {
            title: "Real estate management platform",
            description: "Real estate management platform description",
            paragraphs: [
                {
                    text: "2323text1 blabala"
                },
                {
                    text: "2323text2343 blabala23423"
                }
            ]
        }
    ]
    return (
        <div>
            <h6>
                Projects
            </h6>
            <div>
                Some projects I built for fun. Most of them are open-source. Check them out on Github.
            </div>
            {projects.map((project) =>
                <ProjectCard title={project.title} description={project.description} paragraphs={project.paragraphs} />
            )}
        </div>
    )
}

export default Projects
