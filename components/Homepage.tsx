import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import DescriptionSection from './DescriptionSection'
import RoadmapSection from './RoadmapSection'
import PartnerSection from './PartnerSection'

export default function Homepage() {
    return (
        <div className='z-20 p-5 w-full h-full max-w-7xl'>
            <Header />
            <MainSection />
            <DescriptionSection />
            <RoadmapSection />
            <PartnerSection />
        </div>
    )
}
