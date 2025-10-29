import React from 'react'
import { Gallery } from '../components'

const Design = () => {
    return (
        <section className="h-screen flex items-center justify-center flex-wrap gap-3 w-full pt-3">
            <Gallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </section>
    )
}

export default Design