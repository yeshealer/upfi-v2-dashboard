'use client'

import Image from 'next/image'
import React from 'react'
import { BsDiscord, BsTwitter, BsTelegram } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import LaunchBtn from './LaunchBtn'

export default function Header() {
    const IconStyle = 'cursor-pointer hover:text-yellow-400 transition-all duration-500'

    return (
        <div className='w-full h-auto flex items-center justify-between'>
            <Image src={'/logo.png'} width={124} height={118} alt='logo' draggable={false} />
            <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10'>
                <div className='flex items-center gap-5'>
                    <a href="https://discord.gg/V4GkGfZZUf" target='_blank'>
                        <BsDiscord size={32} className={IconStyle} />
                    </a>
                    <a href="https://twitter.com/_UpFinance" target='_blank'>
                        <BsTwitter size={32} className={IconStyle} />
                    </a>
                    <a href="https://t.me/UPFinance0" target='_blank'>
                        <BsTelegram size={32} className={IconStyle} />
                    </a>
                    <a href="https://upfinance.gitbook.io/docs/" target='_blank'>
                        <HiDocumentText size={36} className={IconStyle} />
                    </a>
                </div>
                <LaunchBtn title='Launch DApp' size='small' />
            </div>
        </div>
    )
}
