import React from 'react'

interface LaunchBtnProps {
    size: string;
    title: string;
}

export default function LaunchBtn({
    size,
    title
}: LaunchBtnProps) {
    return (
        <button className={`box-border relative z-30 inline-flex items-center justify-center w-auto ${size === 'large' ? 'px-6 py-2 md:px-12 md:py-4' : 'py-2 px-5 md:px-8 md:py-3'} overflow-hidden text-white transition-all duration-300 bg-yellow-600 rounded-md cursor-pointer group ring-offset-1 ring-1 ring-yellow-300 ring-offset-yellow-200 hover:ring-offset-yellow-500 ease focus:outline-none tracking-widest`}>
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className={`relative z-20 flex items-center ${size === 'large' ? 'text-sm md:text-base' : 'text-sm'}`}>
                {title}
            </span>
        </button >
    )
}
