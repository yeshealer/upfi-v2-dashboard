import React from 'react'
import LaunchBtn from '../LaunchBtn'

export default function DescriptionSection() {
    return (
        <div className='bg-gradient-to-r from-zinc-600/20 to-zinc-700/30 border border-yellow-600/20 rounded-md py-3 md:py-6 px-5 md:px-10 backdrop-blur'>
            <div className='text-yellow-600 text-base md:text-xl font-semibold tracking-wider'>Welcome to the first UNIFIED DEFI Ecosystem</div>
            <div className='text-yellow-100 text-2xl md:text-4xl font-bold tracking-widest my-4'>WHAT IS UP?</div>
            <div className='text-yellow-200 text-sm md:text-base opacity-70 tracking-wider mb-4'>UP is a protocol developed by the UP team, aptly named dually for the name of our organization and to the direction of the tokens price action being only and always UP - created for all markets bear and bull alike.</div>
            <a href="https://upfinance.gitbook.io/docs/" target='_blank'>
                <LaunchBtn title='Documentation' size='small' />
            </a>
        </div>
    )
}
