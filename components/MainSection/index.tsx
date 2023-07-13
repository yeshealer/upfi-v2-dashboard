import Image from 'next/image'
import React from 'react'
import Title from './Title'
import LaunchBtn from '../LaunchBtn'
import styles from './style.module.scss'

export default function MainSection() {
    return (
        <div className={`w-full flex flex-col lg:flex-row items-center justify-center ${styles.main_section} pb-20 mt-6 lg:mt-0`}>
            <div className='w-full lg:w-2/3'>
                <Title size='small' />
                <div className='tracking-widest text-sm md:text-base xl:text-lg mt-6 text-center lg:text-start'>Providing a great opportunity to earn Real Yield with no price depreciation, only price appreciation!!</div>
                <div className='flex items-center gap-4 mt-10 md:mt-12 lg:mt-20 justify-center lg:justify-start'>
                    <a href='https://nft.upfinance.io/?ref=1' target='_blank'>
                        <LaunchBtn title='NFT Mint' size='large' />
                    </a>
                    <a href='http://app.upfinance.io/' target='_blank'>
                        <LaunchBtn title='Launch DApp' size='large' />
                    </a>
                </div>
            </div>
            <div className='w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 mt-10 lg:mt-0'>
                <Image src={'/bg-logo.png'} width={657} height={524} alt='background logo' draggable={false} />
            </div>
        </div>
    )
}