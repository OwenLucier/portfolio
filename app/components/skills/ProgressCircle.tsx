"use client"
import React from 'react'
import { Variants, motion } from 'framer-motion'

interface RadialProgressBarProps {
    percentage: number;
    imageSrc: string; // New prop for the image source URL
    animDelay: number;
}

const RadialProgressBar: React.FC<RadialProgressBarProps> = ({ percentage, imageSrc, animDelay }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const startingAngle = -90; // Angle in degrees to start the progress bar



    return (

        <div className="flex w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full shadow-c-md">

            <svg className="w-full h-full" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#014737", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#31C48D', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle
                    className="text-slate-800 stroke-current"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeWidth="10px"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset="0"
                    strokeLinecap="round" // Add strokeLinecap property to make the ends rounded
                    style={{
                        boxShadow: "6px 6px 10px -1px rgba(0, 0, 0, 0.7)" // Add box shadow
                    }}
                />

                <svg className="w-[100px] h-[100px]" viewBox="0 0 200 200">
                    <motion.circle
                        className="stroke-current"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        strokeWidth="20px"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={offset}
                        transform={`rotate(${startingAngle} 100 100)`}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1, delay: animDelay }}
                        style={{
                            stroke: `url(#gradient)`, // Use the gradient as the stroke color
                        }}
                    />
                </svg>

                <motion.image
                    href={imageSrc}
                    x="60"
                    y="30%"
                    width="80"
                    height="80"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: animDelay,
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                />

            </svg>
        </div>
    );
};

export default RadialProgressBar;