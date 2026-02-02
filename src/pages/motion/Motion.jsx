import React from 'react'
import { Masonry, Footer } from '../../components'
import { motion } from '../../utils/constant'

const Motion = () => {
    return (
        <>
            <section className="h-screen w-full overflow-hidden p-10">
                <Masonry
                    items={motion}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover
                    hoverScale={0.95}
                    blurToFocus
                    colorShiftOnHover={false}
                />
            </section>
            <Footer />
        </>
    )
}

export default Motion