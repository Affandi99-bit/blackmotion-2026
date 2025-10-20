import React from 'react'
import { Footer, SplitText } from '../components'
import { items } from '../utils/constant'
import { Link } from 'react-router-dom'
import { span } from 'motion/react-client'

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
            <div className='bg-dark h-40 w-full flex items-center justify-center'>
                {items.slice(2).map((item, index) => {
                    return <p key={index} className='text-light text-xl flex items center gap-3 font-body'>{item.links.map((i, idx) => {
                        return <a href={i.href} target='_blank' key={idx}>{i.label}</a>
                    })}</p>
                })}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Contact
