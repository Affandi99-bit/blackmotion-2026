import React from 'react'
import { Gallery } from '../components'

const Design = () => {
    return (
        <section className="h-screen w-full overflow-hidden">
            <Gallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </section>
    )
}

export default Design