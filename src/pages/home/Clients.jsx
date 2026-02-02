import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { client } from '../../assets'
gsap.registerPlugin(ScrollTrigger)
const Clients = () => {
    return (
        <div className='px-4 sm:px-5 md:px-20 py-8 sm:py-10 md:py-12 mt-10'>
            {/* <p className='text-light font-body text-xl py-10'>Trusted by amazing clients</p> */}
            <div
                className='w-full h-full flex items-center justify-center '
                ref={el => {
                    if (!el) return;
                    gsap.set(el, { opacity: 0, y: 60 });
                    ScrollTrigger.create({
                        trigger: el,
                        start: 'top 85%',
                        onEnter: () => {
                            gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
                        },
                        once: true
                    });
                }}
            >
                <img src={client} className='object-contain w-[70%] h-full max-h-[200px] sm:max-h-[300px] md:max-h-none' alt="" />
            </div>
        </div>
    )
}

export default Clients