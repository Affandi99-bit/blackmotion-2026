import React, { useEffect, useRef, useState } from 'react'
import { SplitText, TiltedCard } from '../components'
import { achievements, items, services } from '../utils/constant'
import { Link } from 'react-router-dom'
import { bg, client } from '../assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0)
    const achievementsRef = useRef(null)
    const achievementsContainerRef = useRef(null)

    useEffect(() => {
        if (!achievementsRef.current || !achievementsContainerRef.current) return

        // Create ScrollTrigger for achievements section
        ScrollTrigger.create({
            trigger: achievementsContainerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress
                const totalAchievements = achievements.length
                const newIndex = Math.floor(progress * totalAchievements)
                const clampedIndex = Math.min(newIndex, totalAchievements - 1)

                if (clampedIndex !== currentAchievementIndex) {
                    // Fade out current content
                    gsap.to(achievementsRef.current, {
                        opacity: 0,
                        duration: 0.02,
                        ease: "power2.out",
                        onComplete: () => {
                            setCurrentAchievementIndex(clampedIndex)
                            // Fade in new content
                            gsap.to(achievementsRef.current, {
                                opacity: 1,
                                duration: 0.3,
                                ease: "power2.in"
                            })
                        }
                    })
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [currentAchievementIndex])

    return (
        <div>
            {/* Hero */}
            <main className='w-full h-screen relative flex items-start bg-[#f3f3f3]'>
                <div className='flex flex-col justify-end p-3 h-full w-1/2'>
                    <SplitText
                        as='h1'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        className='font-head tracking-widest text-6xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='CV. KREASI RUMAH HITAM | JI. Suropati Gg.9 No.20, RT.I/RW.8, Pesanggrahan,Kec.Batu, Kota Batu, Jawa Timur 65313'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={0.15}
                        className='font-body text-xs text-dark mt-2'
                    />
                </div>
                <div className='w-1/2 h-full'><video src={bg} loop muted autoPlay className='h-full w-full object-cover'></video></div>
            </main>
            {/* About */}
            <main className='w-full min-h-screen relative bg-dark'>
                <p className='text-gray-400 text-2xl/12 tracking-widest font-body text-justify px-3 pt-6'>
                    <span className='text-light font-semibold tracking-widest'>BLACKMOTION.ID</span> created in 2020 and we work in various aspects of multimedia such as <span className='text-light font-semibold tracking-widest'>Design, Motion Graphics
                        and 3D.</span> We develop methods that always <span className='text-light font-semibold tracking-widest'>provide solutions and innovations to clients</span> so that all ideas and expectations we give
                    are always <span className='text-light font-semibold tracking-widest'>more than what expected.</span> We partner with different companies and personalities who keep us <span className='text-light font-semibold tracking-widest'>learning new things.</span>
                    The result is a very well maintained sustainability in subsequent projects. The last thing that is always embedded in our mindset
                    is to be the <span className='text-light font-semibold tracking-widest'>best creative partner in the client's heart.</span></p>
                {/* Achievement */}
                <div ref={achievementsContainerRef} className='w-full mt-40 flex flex-col items-end min-h-[400vh]'>
                    <section ref={achievementsRef} className='sticky w-full top-1/2 transform -translate-y-1/2 flex items-center justify-around'>
                        <TiltedCard
                            imageSrc={achievements[currentAchievementIndex]?.images}
                            altText={achievements[currentAchievementIndex]?.year}
                            captionText={`Blackmotion.id | ${achievements[currentAchievementIndex]?.year}`}
                            containerHeight="300px"
                            containerWidth="500px"
                            imageHeight="300px"
                            imageWidth="500px"
                            rotateAmplitude={10}
                            scaleOnHover={1.01}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text inset-4">
                                    {achievements[currentAchievementIndex]?.year}
                                </p>
                            }
                        />
                        <div className='text-light py-5 flex flex-col items-start justify-start'>
                            <p className='font-head text-5xl tracking-wider my-10'>
                                {achievements[currentAchievementIndex]?.year}
                            </p>
                            <ul className='flex flex-col items-start justify-start list-disc'>
                                {achievements[currentAchievementIndex]?.items.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className='font-body'>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
                {/* Project CTA */}
                <Link to={'/projects'} className='text-light text-xs font-body rounded-full border border-gray-400 flex items-center justify-center w-28 h-12'>Recent Projects</Link>
                {/* CLients */}
                {/* <p className='text-light pt-5 px-3 text-lg font-body'>Clients:</p> */}
                <div className='w-full h-full flex items-center justify-center px-20 py-12'>
                    <img src={client} className='object-contain w-full h-full' alt="" />
                </div>
                {/* Service */}
                <div className='py-10'>
                    <p className='text-light pt-5 px-3 text-lg font-body'>Our Services:</p>
                    <div className='py-6 flex flex-wrap gap-10 items-center justify-around'>
                        {services.map((item) => {
                            return <p key={item.id} className='text-light px-3 font-body text-lg w-1/3 border-b border-b-gray-500'><span className='text-5xl text-gray-500/25 font-head'>0{item.id}</span> {item.title}</p>
                        })}
                    </div>
                </div>
            </main>
            {/* Footer */}
            <main className='w-full h-[80vh] relative flex items-start bg-light rounded-t-3xl'>
                <p className='absolute top-3 left-3 text-dark text-8xl/20 font-body font-semibold'>CONTACT</p>
                <section className='w-1/2 h-full flex flex-col items-start p-5 justify-end'>
                    <div className='flex justify-center items-start gap-1 text-gray-400 font-body'>
                        <p>also visit</p><a className='underline hover:italic' target='_blank' href='https://blackstudio.id'>blackstudio.id</a>
                    </div>
                </section>
                <section className='w-1/2 h-full flex flex-col items-start p-5 justify-end'>
                    {items.map((item, itemIndex) => (
                        <div key={itemIndex} className='mb-4'>
                            <h3 className='text-lg font-head text-dark mb-2'>{item.label}</h3>
                            <div className='flex flex-col gap-1'>
                                {item.links.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
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
            </main>
        </div>
    )
}

export default Home