import React from 'react'
import { Footer, SplitText, Magnet } from '../components'
import { items } from '../utils/constant'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            {/* Hero */}
            <main className='w-full h-[80vh] relative bg-light flex flex-col items-center justify-center'>
                <SplitText
                    as='h1'
                    text='CONTACT US'
                    type='chars'
                    stagger={0.03}
                    fromY={24}
                    duration={0.8}
                    className='text-center font-head text-9xl tracking-wider text-dark w-full'
                />
                <SplitText
                    as='p'
                    text='Get in touch with us for your next creative project.'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={0.15}
                    className='text-center font-body text-xs text-dark mt-2'
                />
            </main>
            <div className='bg-dark h-40 w-full p-3'>
                {items.slice(2).map((item, index) => {
                    return <div key={index} className='w-full'>{item.links.map((i, idx) => {
                        return <Magnet key={idx} wrapperClassName='w-1/4' innerClassName='w-full flex items-center justify-around' padding={50} disabled={false} magnetStrength={15}>
                            <a href={i.href} target='_blank' className='transition duration-300 text-light text-xl gap-3 font-body w-28 h-16 flex items-center justify-center rounded-full border hover:border-2 border-light border-dashed'>{i.label}</a>
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
