"use client"
import React from 'react'
import ProjectCard from './projects/ProjectCard';
import {motion, useScroll } from 'framer-motion';

// Rest of the code...
import { Container } from './Container';

const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Morion",
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"],
        link: "/project-1"
    },
    {
        id: 2,
        title: "Admin Dashboard",
        description: "An administrative dashboard for managing users, hardware and configurations",
        imgUrl: "/.png",
        tags: ["UX Design", "UI Design", "Figma"],
        link: "/project-2"
    },
    {
        id: 3,
        title: "Wilfrid Laurier Case Study",
        description: "A joint-case study with Unreal Design Partners, a UX Design agency based in Toronto, Ontario",
        imgUrl: "/grd-cover.png",
        tags: ["UX Design", "UI Design", "Figma", "UX Research", "UX Strategy"],
        link: "/project-3"
    },

];


const ProjectsSection = () => {
    const { scrollYProgress } = useScroll();


    return (
        <section id="Projects" className="min-h-screen">
            <Container>


            <h2 className="font-extrabold text-4xl py-2 mb-8 mt-20 flex justify-left text-white">My Projects</h2>

                <div className="grid grid-cols-3">

                    <div className="col-span-2">
                        {projectData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                tag={project.tags}
                                link={project.link}
                                />
                        ))}
                    </div>
                </div>



            </Container>
        </ section >
    )
}

export default ProjectsSection