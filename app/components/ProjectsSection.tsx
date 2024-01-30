"use client"
import React from 'react'
import ProjectCard from './projects/ProjectCard';
import { motion, useScroll } from 'framer-motion';

import { Container } from './Container';


const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: `A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Motion; while also showcasing my work and skills! This project is ongoing and regular updates are made. \n `,
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"],
        link: "/project-1",
        subtitle: "Personal Project",
        date: "January - 2024"
    },
    {
        id: 2,
        title: "Wilfrid Laurier Case Study",
        description: `A joint-case study with Unless Design Partners, a UX Design agency based in Kitchener, Ontario. My team and I conducted a UX Research study on the Wilfrid Laurier University wellness services and proposed a new design solution. Our contributions awarded us 1st place against 5 other teams! `,
        imgUrl: "/grd-cover.png",
        tags: ["UX Design", "UI Design", "Figma", "UX Research", "UX Strategy"],
        link: "/project-2",
        date: "April - 2022"
    },
    {
        id: 3,
        title: "Web Design for Woolwich Seniors Association",
        description: `A freelance project where I worked with the Woolwich Seniors Association to design a new website for their organization. The project involved designing for a targeted demographic with accessability in mind, creating wireframes, and building the final website.`,
        imgUrl: "/wsa-cover.png",
        tags: ["UX Design", "UI Design", "Figma", "Web Design", "Accessibility", "Wireframing", "Wordpress"],
        link: "/project-3"
    }

];


const ProjectsSection = () => {
    const { scrollYProgress } = useScroll();


    return (
        <section id="Projects" className="flex min-h-screen">
            <Container>

                <div className="flex flex-wrap">
                    <h2 className="font-extrabold text-xl mx-8 py-2 mt-20 text-white justify-start">My Projects</h2>
                </div>
                <div className=" md:flex flex-col">

                    <div>
                        {projectData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                tag={project.tags}
                                link={project.link}
                                subtitle={project.subtitle}
                                date={project.date}
                            />
                        ))}
                    </div>
                </div>

            </Container>
        </ section >
    )
}

export default ProjectsSection