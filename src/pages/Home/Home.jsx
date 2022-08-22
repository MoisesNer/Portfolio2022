import React from 'react'
import Hero from '../../components/Hero/Hero'
import InfoSection from '../../components/InfoSection/InfoSection'

import { InfoData } from '../../data/InfoData'

export default function Home() {
    return (
        <>
            <Hero slides={InfoData}/>
            <InfoSection/>
        </>
    )
}
