import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const floatCTA = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ctaRef.current,
            { opacity: 0, x: 40, pointerEvents: "none" },
            {
                opacity: 1,
                x: 0,
                pointerEvents: "auto",
                duration: 0.6,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: "top+=300 top",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    return (
        <div ref={ctaRef} className='fixed right-10 bottom-10 z-9999'>
            <button
                className="cursor-pointer group relative bg-white  text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12"
            >
                <a href='https://wa.me/628113577793' target='_blank' className="relative flex items-center justify-center gap-2">
                    <span className="relative inline-block overflow-hidden">
                        <span
                            className="block transition-transform duration-300 group-hover:-translate-y-full"
                        >
                            Need Motion
                        </span>
                        <span
                            className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                        >
                            Blackmotion
                        </span>
                    </span>

                    <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                        viewBox="0 0 24 24"
                    >
                        <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="white"
                            d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                        ></path>
                    </svg>
                </a>
            </button>

        </div>
    )
}

export default floatCTA