import React, { useEffect, useRef } from 'react'
import { design } from '../utils/constant'
import { Footer } from '../components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Design = () => {
    const containerRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item, index) => {
                if (!item) return

                // Different parallax speeds based on index
                const speed = (index % 3) * 0.5 + 0.5 // 0.5, 1, 1.5
                const direction = index % 2 === 0 ? 1 : -1 // Alternate directions

                // Parallax effect
                gsap.fromTo(item,
                    {
                        y: -100 * speed * direction,
                    },
                    {
                        y: 100 * speed * direction,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        }
                    }
                )

                // Scale and fade in on enter
                gsap.fromTo(item,
                    {
                        scale: 0.8,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        }
                    }
                )
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className='relative py-20'>
            <section ref={containerRef} className="flex items-center justify-center flex-wrap gap-3 w-full pt-3 pb-40">
                {design.map((item, index) => {
                    return (
                        <a
                            href='#'
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className='w-96 h-64 rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0 transition-all duration-300'
                        >
                            <img src={item.image} alt={item.title || ''} className='w-full h-full object-cover' />
                        </a>
                    )
                })}
            </section>
            <Footer />
        </div>
    )
}

export default Design