import Link from 'next/link';
import React from 'react'
import { FaEye, FaCode } from "react-icons/fa6";
import GlowingCard from './GlowingCard';
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";



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
            <div className="flex h-full p-3 md:p-6 ">

                {/* Image */}
                <div className="flex-1 bg-transparent relative">
                    <div className="absolute inset-0 flex bg-[radial-gradient(at_top_right,_#FFFFFF,_#565656,_transparent)] rounded-lg sm:rounded-2xl"
                        style={{ boxShadow: '-13px 39px 250px -39px rgba(255, 255, 255, 0.17)' }}>
                        <div className="flex-grow m-0.5 bg-[#181818] rounded-lg sm:rounded-2xl">
                            <div
                                className="h-full rounded-t-xl relative group rounded-b-2xl"
                                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-top flex-col flex-1 ml-5">
                    {/* Align the arrow to the end */}
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg text-white sm:text-xl font-semibold">{title}</h5>
                        <FaArrowRightLong className="hidden sm:flex items-center text-white text-2xl" />
                    </div>

                    <p className="hidden sm:flex xs:text-xs md:text-lg text-gray-200">{description}</p>

                    <div className="flex flex-wrap mt-4">
                        {/* Make an individual pill component */}
                        {/* <div className="bg-transparent border-2 border-emerald-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{tag}</div> */}
                    </div>
                </div>
            </div>
        </GlowingCard>
    )
}

export default ProjectCard