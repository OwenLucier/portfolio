import Link from 'next/link';
import React from 'react'
import { FaEye, FaCode } from "react-icons/fa6";
import GlowingCard from './GlowingCard';
import Image from 'next/image'


type ProjectCardProps = {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
    tag: string[];
};

// ProjectCard is a React functional component that accepts an imgUrl, title, description, and tag prop from the ProjectsSection 
const ProjectCard = ({ id, imgUrl, title, description, tag }: ProjectCardProps) => {
    return (
        <GlowingCard>
            <div className="grid h-full grid-cols-2 gap-10 p-3">

                {/*Image */}
                <div className="flex col-span-1 h-flex bg-transparent relative">
                    <div className="absolute inset-0 flex bg-gradient-to-tr from-transparent via-white to-transparent rounded-2xl"
                        style={{ boxShadow: '-13px 39px 250px -39px rgba(255, 255, 255, 0.17)' }}>
                        <div className={`flex-grow m-0.5 bg-[#181818] rounded-2xl`}>
                            <div
                                className="col-span-1 h-full rounded-t-xl relative  group rounded-b-2xl"
                                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                            />
                        </div>
                    </div>
                </div>
                

                <div className="col-span-1">
                    <h5 className="font-xl font-semibold mb-2">{title}</h5>
                    <p className="text-gray-200">{description}</p>
                    <div className="flex flex-wrap mt-4">
                        {/* Make an individual pill component */}
                        {/*<div className="bg-transparent border-2 border-emerald-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{tag}</div>/ */}
                    </div>
                </div>
            </div>
        </GlowingCard>
    )
}

export default ProjectCard