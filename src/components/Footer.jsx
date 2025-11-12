import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../utils/constant'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef(null)
    const scrollTriggerRef = useRef(null)

    useEffect(() => {
        const footer = footerRef.current
        if (!footer) return

        // Set initial position with hardware acceleration
        gsap.set(footer, {
            yPercent: 100,
            force3D: true
        })

        // Create smooth scroll animation with timeline for better control
        const animation = gsap.to(footer, {
            yPercent: 0,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'bottom bottom',
                end: 'bottom+=500 bottom',
                scrub: 1.5, // Smooth scrubbing with 1.5 second lag to reduce jitter
                invalidateOnRefresh: true,
                refreshPriority: -1
            }
        })

        scrollTriggerRef.current = animation.scrollTrigger

        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill()
                scrollTriggerRef.current = null
            }
            animation.kill()
        }
    }, [])

    return (
        <div
            ref={footerRef}
            className='absolute left-0 bottom-0 w-full h-[70vh] sm:h-[75vh] md:h-[80vh] bg-light rounded-t-3xl z-50 flex flex-col md:flex-row items-start overflow-hidden'
            style={{ willChange: 'transform' }}
        >
            <p className='absolute top-3 sm:top-4 md:top-10 left-3 sm:left-4 md:left-6 text-dark text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight sm:leading-tight md:leading-tight lg:leading-[0.2] font-body font-semibold pointer-events-none'>
                CONTACT
            </p>
            <section className=' w-full md:w-1/2 h-full flex flex-col items-start p-4 sm:p-5 md:p-6 justify-end mt-16 sm:mt-20 md:mt-0'>
                <div className='flex justify-center md:justify-start items-start gap-1 text-gray-400 font-body text-sm sm:text-base'>
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

            <section className='w-full md:w-1/2 h-full flex flex-col md:flex-row md:flex-wrap items-start p-4 sm:p-5 md:p-6 justify-end gap-4 md:gap-6'>
                {items.map((item, i) => (
                    <div key={i} className='mb-2 md:mb-4 w-full md:w-[calc(50%-0.75rem)]'>
                        <h3 className='text-base sm:text-lg font-head text-dark mb-2'>{item.label}</h3>
                        <div className='flex flex-col gap-1'>
                            {item.links.map((link, j) => (
                                <Link
                                    key={j}
                                    to={link.href}
                                    className='text-xs sm:text-sm font-body hover:underline text-gray-400'
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
