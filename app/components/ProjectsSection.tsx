"use client"
import React from 'react'
import ProjectCard from './projects/ProjectCard';
import { motion, useScroll } from 'framer-motion';

import { Container } from './Container';


const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        subtitle: "Personal Project",
        description: `A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Motion; while also showcasing my work and skills! This project is ongoing and regular updates are made. \n `,
        descriptionLine2: `I also wanted to create a website that was unique and fun to navigate, so I incorporated a lot of animations and transitions to make the experience more enjoyable.`,
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"],
        link: "/project-1",
        date: "January - 2024"
    },
    {
        id: 2,
        title: "Scotiabank UX Design Competition",
        subtitle: "Joint Case Study",
        description: `A joint-case study with Unless Design Partners, a UX Design agency based in Kitchener, Ontario. My team and I conducted a UX Research study on the Wilfrid Laurier University wellness services and proposed a new design solution. `,
        descriptionLine2: `The project involved conducting interviews, surveys, and usability testing to gather data and insights. We then used this data to create a new design solution and presented it to a panel of judges.`,
        descriptionLine3: "Our team recieved 1st place in the competition against 5 other teams!",
        imgUrl: "/grd-cover.png",
        tags: ["UX Design", "UI Design", "Figma", "UX Research", "UX Strategy", "Usability Testing", "Presentation"],
        link: "/project-2",
        date: "April - 2022"
    },
    {
        id: 3,
        title: "Web Design for Woolwich Seniors Association",
        subtitle: "Freelance Project",
        description: `A freelance project where I worked with the Woolwich Seniors Association to design a new website for their organization. The project involved designing for a targeted demographic with accessability in mind, creating wireframes, and building the final website.`,
        descriptionLine2: " ",
        imgUrl: "/wsa-cover.png",
        tags: ["UX Design", "UI Design", "Figma", "Web Design", "Accessibility", "Wireframing", "Wordpress"],
        link: "/project-3",
        date: "June - 2021"
    },
    

];


const ProjectsSection = () => {
    const { scrollYProgress } = useScroll();


    return (
        <section id="Projects" className="flex min-h-screen">
            <Container>

                <div className="flex flex-wrap">
                    <h2 className="font-extrabold text-xl md:mx-8 py-2 mt-20 text-white justify-start">My Projects</h2>
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
                                descriptionLine2={project.descriptionLine2}
                                descriptionLine3={project.descriptionLine3}
                            />
                        ))}
                    </div>
                </div>

            </Container>
        </ section >
    )
}

export default ProjectsSection