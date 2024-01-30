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
    descriptionLine2?: string;
    descriptionLine3?: string;
    tag: string[];
    link: string;
    subtitle: string;
    date: string;
};

// ProjectCard is a React functional component that accepts an imgUrl, title, description, and tag prop from the ProjectsSection 
const ProjectCard = ({ id, imgUrl, title, subtitle, description, descriptionLine2, descriptionLine3, tag, link, date }: ProjectCardProps) => {
    return (

        <div className="">
            {/*New project card stuff*/}
            <div className="flex flex-col py-8 px-4 min-h-[300px] justify-center mb-20 rounded-xl hover:bg-green-400/20">

                <div className="grid grid-cols-12 relative">
                    <div className="hidden md:flex col-span-2 mr-8 text-gray-400 font-semibold">
                        <p>{date}</p>
                    </div>

                    <div className="md:col-span-10 col-span-12">

                        {/* A container that spans 10 columns that contianes another containber with 2 columns, one for the image and another for the data */}
                        <div className="grid grid-cols-2">

                            {/* Image */}
                            <div className="hidden md:block col-span-1 mr-8">
                                <div className="w-full h-full rounded-2xl" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}> </div>
                            </div>


                            {/* Data */}
                            <div className="flex-col col-span-3 md:col-span-2 lg:col-span-1">
                                <div className="md:hidden col-span-2 text-sm text-gray-400 font-regular">
                                    <p>{date}</p>
                                </div>
                                <h5 className="flex mb-0.1 flex-wrap max-w-[400px] text-start text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">{title}</h5>
                                <h5 className="flex mb-2 flex-wrap max-w-[400px] text-start text-lg md:text-xl text-gray-200 font-semibold">{subtitle}</h5>

                                {/*<FaArrowRightLong className="hidden lg:flex items-center text-white text-2xl"  /> */}

                                <p className="text-gray-400 text-justify mb-1">{description}</p>
                                <p className="text-gray-400 text-justify mb-1">{descriptionLine2}</p>
                                <p className="text-gray-400 text-justify mb-1">{descriptionLine3}</p>
                                <div className="flex flex-wrap mt-1">
                                    {tag.map((tag) => (
                                        <div key={tag} className="flex bg-transparent border-[1px] border-emerald-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-3">{tag}</div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>










        </div>
    )
}

export default ProjectCard


{/* <GlowingCard link={link} >
                <div className="flex h-full p-3 md:p-6 ">
                    <div className="flex-1 bg-transparent relative">
                        <div className="absolute inset-0 flex rounded-lg sm:rounded-2xl"
                        // style={{ boxShadow: '-13px 39px 250px -39px rgba(255, 255, 255, 0.17)' }}
                        >
                            <div className="flex-grow m-0.5 bg-[#181818] rounded-lg sm:rounded-2xl">
                                <div
                                    className="h-full rounded-t-xl relative group rounded-b-2xl"
                                    style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 ml-5 md:pt-2 ">
                        <div className="flex items-center justify-between mb-1 lg:mb-3">
                            <h5 className="flex flex-wrap max-w-[400px] text-start text-sm sm:text-lg lg:text-2xl text-white font-semibold">{title}</h5>
                        </div>
                        <p className="hidden text-[10px] lg:pt-20 sm:flex md:text-sm lg:text-lg md:text-start text-gray-400">{description}</p>
                        <div className="flex flex-wrap mt-4">
                            {tag.map((tag) => (
                                <div key={tag} className="hidden md:flex bg-transparent border-[1px] border-emerald-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mt-3">{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </GlowingCard> */}