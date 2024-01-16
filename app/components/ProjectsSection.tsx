import React from 'react'
import ProjectCard from './ProjectCard'
import { Container } from './Container';

const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "A complex design project for managing cryptographic assets.",
        imgUrl: "/QxProject.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
    {
        id: 1,
        title: "Project 1",
        description: "A complex design project for managing cryptographic assets.",
        imgUrl: "/QxProject.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
    {
        id: 1,
        title: "Project 1",
        description: "A complex design project for managing cryptographic assets.",
        imgUrl: "/QxProject.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
    {
        id: 1,
        title: "Project 1",
        description: "A complex design project for managing cryptographic assets.",
        imgUrl: "/QxProject.png",
        tags: ["UX Design", "UI Design", "Web Design"]
    },
   
];

const ProjectsSection = () => {
    return (
        <section id="Projects" className="pt-20">
            <Container>
            <h2 className="font-extrabold text-4xl py-2 mb-8 flex justify-center text-white">My Projects</h2>

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