import React from 'react'
import { Footer, SplitText, Magnet } from '../components'
import { items } from '../utils/constant'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            {/* Hero */}
            <main className='w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative bg-light flex flex-col items-center justify-center px-4'>
                <SplitText
                    as='h1'
                    text='CONTACT US'
                    type='chars'
                    stagger={0.03}
                    fromY={24}
                    duration={0.8}
                    className='text-center font-head text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wider text-dark w-full'
                />
                <SplitText
                    as='p'
                    text='Get in touch with us for your next creative project.'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={0.15}
                    className='text-center font-body text-xs sm:text-sm md:text-base text-dark mt-2 max-w-2xl'
                />
            </main>
            <div className='bg-dark min-h-80 w-full p-4 sm:p-6 md:p-8'>
                {items.slice(2).map((item, index) => {
                    return <div key={index} className='w-full flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center md:justify-center'>{item.links.map((i, idx) => {
                        return <Magnet key={idx} wrapperClassName='w-full sm:w-1/2 md:w-1/4' innerClassName='w-full flex items-center justify-center' padding={50} disabled={false} magnetStrength={15}>
                            <a href={i.href} target='_blank' rel='noreferrer' className='transition duration-300 text-light text-sm sm:text-base md:text-lg lg:text-xl gap-3 font-body w-full sm:w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-12 sm:h-14 md:h-16 flex items-center justify-center rounded-full border hover:border-2 border-light border-dashed'>{i.label}</a>
                        </Magnet>
                    })}</div>
                })}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Contact
