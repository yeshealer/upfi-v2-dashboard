import Image from 'next/image'
import React from 'react'
import { RoadmapDetails } from './RoadmapDeatil'

export default function RoadmapSection() {
    return (
        <div className='mt-32 lg:mt-48'>
            <div className='text-yellow-100 text-3xl md:text-5xl font-bold tracking-widest my-4'>ROADMAP</div>
            <div className='flex flex-col gap-4'>
                {RoadmapDetails.map(item => (
                    <div className='bg-gradient-to-r from-zinc-600/20 to-zinc-700/30 border border-yellow-600/20 px-3 md:px-10 py-3 md:py-6 rounded-md backdrop-blur'>
                        <div className='text-base md:text-xl text-yellow-500 tracking-wider font-semibold flex items-center gap-4'>
                            <div className='text-yellow-100 bg-yellow-500 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center'>{item.id}</div>
                            {item.period}
                        </div>
                        <div className='pl-6 md:pl-12'>
                            {item.details.map(detail => (
                                <div className='tracking-wider text-sm text-yellow-200 opacity-70 flex items-start gap-2 mt-1'>
                                    <Image src={'/bg-logo.png'} width={16} height={12} alt='background logo' draggable={false} className='mt-0.5' />
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
