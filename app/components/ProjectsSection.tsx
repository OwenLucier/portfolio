import React from 'react'
import ProjectCard from './ProjectCard'
import { Container } from './Container';

const projectData = [
    {
        id: 1,
        title: "Admin Dashboard Prototype",
        description: "A full application prototype for managing cryptographic assets.",
        imgUrl: "/QxProject.png",
        tags: ["UX Design", "UI Design", "Prototype"]
    },
    {
       id: 2,
        title: "Key Generation Flow Prototype",
        description: "Prototype for key generation flow.",
        imgUrl: "/key-flow.png",
        tags: ["UX Design", "UI Design", "Prototype"] 
    },
    {
        id: 3,
        title: "Wilfrid Laurier Wellness Case Study",
        description: "Research case study for Wilfrid Laurier\'s Wellness Services.",
        imgUrl: "/grd-cover.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
    {
        id: 4,
        title: "Personal Portfolio Website",
        description: "My personal portfolio website development.",
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
   
];

const ProjectsSection = () => {
    return (
        <section id="Projects" className="pt-20">
            <Container>
            <h2 className="font-extrabold text-4xl py-2 mb-8 flex justify-left text-white">My Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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