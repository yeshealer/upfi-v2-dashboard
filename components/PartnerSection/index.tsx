import Image from 'next/image'
import React from 'react'
import { PartnerDetails } from './PartnerDetails'

export default function PartnerSection() {
    return (
        <div className='mt-32 lg:mt-48'>
            <div className='text-yellow-100 text-3xl md:text-5xl font-bold tracking-widest my-4'>OUR PARTNERS</div>
            <div className='flex flex-wrap gap-5 justify-between'>
                {PartnerDetails.map(item => (
                    <div className='bg-gradient-to-r from-zinc-600/20 to-zinc-700/30 border border-yellow-600/20 p-1 sm:p-4 rounded-md backdrop-blur flex items-center justify-center w-full sm:w-2/5 md:w-auto'>
                        <Image src={`/partner/${item.image}.png`} width={400} height={70} alt='partner logo' draggable={false} className='w-1/2 sm:w-[200px]' />
                    </div>
                ))}
            </div>
        </div>
    )
}
