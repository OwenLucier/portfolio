import React from 'react'
import Image from 'next/image'

type ProgressBarProps = {
    title: string,
    progress: number,
    href: string,
}

const ProgressBar = ({ progress, href }: ProgressBarProps) => {
    return (
        <div className="grid grid-cols-2 ">

            <div className="flex justify-between w-30 h-6 rounded-full bg-gray-900">
                <div className="progress h-full w-1/2 rounded-full bg-emerald-500">

                </div>
            </div>
            <div className="flex">
                <Image src={href.toString()} width={50} height={50} alt="icon" />
            </div>
        </div>
    )
}

export default ProgressBar