'use client'

import React from 'react'
import { BsDiscord, BsTwitter, BsTelegram } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

export default function Footer() {
    const IconStyle = 'cursor-pointer hover:text-yellow-400 transition-all duration-500'

    return (
        <div className='mt-32 lg:mt-48 bg-gradient-to-r from-zinc-600/20 to-zinc-700/30 border border-yellow-600/20 p-4 backdrop-blur w-full z-20 flex flex-col sm:flex-row items-center justify-between px-10 gap-2 sm:gap-auto'>
            <div className='tracking-widest text-yellow-100'>Copyright @UPfinance 2022</div>
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
        </div>
    )
}
