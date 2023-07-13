import React from 'react'
import styles from './style.module.scss'

interface TitleTypes {
    size?: string;
}

export default function Title({
    size
}: TitleTypes) {
    return (
        <div className='flex flex-col items-center lg:items-start'>
            <div className={`${styles.descTitleGroup} text-center`}>
                <div className={`${styles.descTitle} text-5xl md:text-6xl lg:text-[56px] xl:text-[65px] font-bold`}>ONLY AND ALWAYS</div>
                <div className={`${styles.descTitle} text-5xl md:text-6xl lg:text-[56px] xl:text-[65px] font-bold`}>ONLY AND ALWAYS</div>
            </div>
            <div className={`text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-widest font-bold text-yellow-500 ${styles.up_text}`}>UP</div>
        </div>
    )
}