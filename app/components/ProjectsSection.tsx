"use client"
import React from 'react'
import ProjectCard from './ProjectCard';
import {motion, useScroll } from 'framer-motion';

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
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Morion",
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"]
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personal project aimed at learning and expanding my skills with Typescript, React, NextJs, Tailwind and Framer Morion",
        imgUrl: "/portfolio.png",
        tags: ["UX Design", "UI Design", "NextJs", "React", "Typescript", "Tailwind", "Framer Motion"]
    },

];


const ProjectsSection = () => {
    const { scrollYProgress } = useScroll();


    return (
        <section id="Projects" className="min-h-screen">
            <Container>


            <h2 className="font-extrabold text-4xl py-2 mb-8 mt-20 flex justify-left text-white">My Projects</h2>

                <div className="grid grid-cols-3 bg-red-500">

                    <div className="flex col-span-1 bg-blue-500 justify-end pr-20">
                        {/*A component that takes project props and creates a verticle progress bar with points at each project card and title/date of project*/}
                        <motion.div className="w-[2px] h-full bg-emerald-500" style={{ scaleX: scrollYProgress }}>
                        </motion.div>

                    </div>

                    <div className="col-span-2">
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
                </div>



            </Container>
        </ section >
    )
}

export default ProjectsSection