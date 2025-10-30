import React, { useEffect, useRef, useState } from 'react'
import { Footer, SplitText, TiltedCard, Button } from '../components'
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
        const achievementScrollTrigger = ScrollTrigger.create({
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
            // Only kill the specific ScrollTrigger created in this effect
            if (achievementScrollTrigger) {
                achievementScrollTrigger.kill()
            }
        }
    }, [currentAchievementIndex])

    return (
        <div className='relative'>
            {/* Hero */}
            <main className='w-full h-[70dvh] md:h-screen relative flex items-start bg-[#f3f3f3]'>
                <div className='z-10 flex flex-col justify-center md:justify-end p-5 h-full w-full md:w-1/2'>
                    <SplitText
                        as='h1'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        delay={1.2}
                        className='font-head tracking-widest text-3xl sm:text-4xl md:text-6xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='CV. KREASI RUMAH HITAM | JI. Suropati Gg.9 No.20, RT.I/RW.8, Pesanggrahan,Kec.Batu, Kota Batu, Jawa Timur 65313'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs text-dark mt-2'
                    />
                </div>
                <div className='w-full md:w-1/2 h-full absolute top-0 left-0 md:relative z-0'><video src={bg} loop muted autoPlay className='h-full w-full object-cover'></video></div>
            </main>
            {/* About */}
            <main className='w-full bg-dark pb-72 md:pb-40'>
                <div className='text-gray-400 text-xl md:text-2xl/12 tracking-widest font-body text-justify px-3 pt-6'>
                    <SplitText
                        as='span'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.02}
                        fromY={20}
                        duration={0.6}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline-block'
                    />
                    <SplitText
                        as='span'
                        text=' created in 2020 and we work in various aspects of multimedia such as '
                        type='words'
                        stagger={0.01}
                        fromY={15}
                        duration={0.5}
                        delay={0.2}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='inline'
                    />
                    <SplitText
                        as='span'
                        text='Design, Motion Graphics and 3D.'
                        type='words'
                        stagger={0.02}
                        fromY={18}
                        duration={0.6}
                        delay={0.3}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline'
                    />
                    <SplitText
                        as='span'
                        text=' We develop methods that always '
                        type='words'
                        stagger={0.01}
                        fromY={15}
                        duration={0.5}
                        delay={0.4}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='inline'
                    />
                    <SplitText
                        as='span'
                        text='provide solutions and innovations to clients'
                        type='words'
                        stagger={0.02}
                        fromY={18}
                        duration={0.6}
                        delay={0.5}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline'
                    />
                    <SplitText
                        as='span'
                        text=' so that all ideas and expectations we give are always '
                        type='words'
                        stagger={0.01}
                        fromY={15}
                        duration={0.5}
                        delay={0.6}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='inline'
                    />
                    <SplitText
                        as='span'
                        text='more than what expected.'
                        type='words'
                        stagger={0.02}
                        fromY={18}
                        duration={0.6}
                        delay={0.7}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline'
                    />
                    <SplitText
                        as='span'
                        text=' We partner with different companies and personalities who keep us '
                        type='words'
                        stagger={0.01}
                        fromY={15}
                        duration={0.5}
                        delay={0.8}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='inline'
                    />
                    <SplitText
                        as='span'
                        text='learning new things.'
                        type='words'
                        stagger={0.02}
                        fromY={18}
                        duration={0.6}
                        delay={0.9}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline'
                    />
                    <SplitText
                        as='span'
                        text=' The result is a very well maintained sustainability in subsequent projects. The last thing that is always embedded in our mindset is to be the '
                        type='words'
                        stagger={0.01}
                        fromY={15}
                        duration={0.5}
                        delay={1.0}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='inline'
                    />
                    <SplitText
                        as='span'
                        text='best creative partner in the client&apos;s heart.'
                        type='words'
                        stagger={0.02}
                        fromY={18}
                        duration={0.6}
                        delay={1.1}
                        useScrollTrigger={true}
                        scrollTriggerScrub={1}
                        scrollTriggerStart='top 80%'
                        className='text-light font-semibold tracking-widest inline'
                    />
                </div>
                {/* Achievement */}
                <div ref={achievementsContainerRef} className='w-full mt-40 flex flex-col items-end min-h-[300vh]'>
                    <section ref={achievementsRef} className='sticky w-full top-1/2 transform -translate-y-1/2 flex flex-col md:flex-row items-center justify-around p-10 md:p-0'>
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
                <div
                    className='w-full h-full flex items-center justify-center px-5 md:px-20 py-12'
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
                    <img src={client} className='object-contain w-full h-full' alt="" />
                </div>
                {/* Service */}
                <div className='pt-10'>
                    <p className='text-light pt-5 px-3 text-lg font-body'>Our Services:</p>
                    <div className='py-6 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-around'>
                        {services.map((item) => {
                            return (
                                <div key={item.id} className='service-item text-light px-3 font-body text-lg w-full md:w-1/3 border-b border-b-gray-500'>
                                    <SplitText
                                        as='span'
                                        text={`0${item.id}`}
                                        type='words'
                                        stagger={0.02}
                                        fromY={18}
                                        duration={0.6}
                                        delay={1.1}
                                        useScrollTrigger={true}
                                        scrollTriggerScrub={1}
                                        scrollTriggerStart='top 80%'
                                        className='text-5xl text-gray-500/25 font-head px-2' />
                                    <SplitText
                                        as='span'
                                        text={item.title}
                                        type='words'
                                        stagger={0.02}
                                        fromY={18}
                                        duration={0.6}
                                        delay={1.2}
                                        useScrollTrigger={true}
                                        scrollTriggerScrub={1}
                                        scrollTriggerStart='top 80%' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home