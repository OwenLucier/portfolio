import Link from 'next/link';
import React from 'react'
import { FaEye, FaCode } from "react-icons/fa6";


type ProjectCardProps = {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
    tag: string[];
};

// ProjectCard is a React functional component that accepts an imgUrl, title, and description prop from the ProjectsSection 
const ProjectCard = ({ id, imgUrl, title, description }: ProjectCardProps) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link href="/project-1" className="h-14 w-14 border-2 relative rounded-full border-gray-200 hover:border-white group/link">
                    <FaEye className="h-10 w-10 text-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard