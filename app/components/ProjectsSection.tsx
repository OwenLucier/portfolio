import React from 'react'
import ProjectCard from './ProjectCard';

// Rest of the code...
import { Container } from './Container';

const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Morion",
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"]
    },
   
];

const ProjectsSection = () => {
    return (
        <section id="Projects" className="pt-20 pb-20">
            <Container>
            <h2 className="font-extrabold text-4xl py-2 mb-8 flex justify-left text-white">My Projects</h2>

            <div className="mt-8">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        tag={project.tags} />
                        ))}
            </div>
            </Container>
        </ section>
    )
}

export default ProjectsSection