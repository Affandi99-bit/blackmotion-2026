import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../utils/constant'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef(null)

    useEffect(() => {
        const footer = footerRef.current
        gsap.set(footer, { yPercent: 100 })

        gsap.to(footer, {
            yPercent: 0,
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'bottom bottom',
                end: 'bottom+=500 bottom',
                scrub: true,
            },
        })
    }, [])

    return (
        <div
            ref={footerRef}
            className='absolute left-0 bottom-0 w-full h-[80vh] bg-light rounded-t-3xl z-50 flex items-start overflow-hidden'
        >
            <p className='absolute top-3 left-3 text-dark text-8xl/20 font-body font-semibold'>
                CONTACT
            </p>
            <section className='w-1/2 h-full flex flex-col items-start p-5 justify-end'>
                <div className='flex justify-center items-start gap-1 text-gray-400 font-body'>
                    <p>also visit</p>
                    <a
                        className='underline hover:italic'
                        target='_blank'
                        rel='noreferrer'
                        href='https://blackstudio.id'
                    >
                        blackstudio.id
                    </a>
                </div>
            </section>

            <section className='w-1/2 h-full flex flex-col items-start p-5 justify-end'>
                {items.map((item, i) => (
                    <div key={i} className='mb-4'>
                        <h3 className='text-lg font-head text-dark mb-2'>{item.label}</h3>
                        <div className='flex flex-col gap-1'>
                            {item.links.map((link, j) => (
                                <Link
                                    key={j}
                                    to={link.href}
                                    className='text-sm font-body hover:underline text-gray-400'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Footer
