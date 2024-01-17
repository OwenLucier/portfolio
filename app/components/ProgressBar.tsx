import React from 'react'
import Image from 'next/image'

type ProgressBarProps = {
    title: string,
    progress: number,
    href: string,
}

const ProgressBar = ({ progress, href }: ProgressBarProps) => {
    return (
        <div className="flex">
            <div className="flex-none -translate-y-3 pr-5">
                <Image src={href.toString()} width={50} height={50} alt="icon" />
            </div>
            <div className="h-3 translate-y-1 rounded-full grow bg-gray-900">

                <div className="progress h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500" style={{ width: `${progress}%` }}/>
            </div>

        </div>
    )
}

export default ProgressBar