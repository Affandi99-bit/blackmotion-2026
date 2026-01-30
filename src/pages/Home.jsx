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
            <main className='w-[full] h-[70dvh] md:h-screen relative flex flex-col md:flex-row items-start bg-[#f3f3f3] overflow-hidden'>
                <div className='z-10 flex flex-col justify-center md:justify-end p-4 sm:p-5 h-full w-full md:w-1/2 relative'>
                    <SplitText
                        as='h1'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        delay={1.2}
                        className='font-head tracking-widest text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='CV. KREASI RUMAH HITAM | JI. Suropati Gg.9 No.20, RT.I/RW.8, Pesanggrahan,Kec.Batu, Kota Batu, Jawa Timur 65313'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs sm:text-sm text-dark mt-2 break-words'
                    />
                    <SplitText
                        as='h1'
                        text='Percayakan Animasi Anda pada Ahlinya di Animasi Studio Cepat & Original'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xl sm:text-sm text-dark mt-10 break-words'
                    />
                    <SplitText
                        as='p'
                        text='Selesai dalam 2 Hari!'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs sm:text-sm text-dark mt-2 break-words'
                    />
                    <SplitText
                        as='p'
                        text='Kami telah dipercaya oleh banyak brand besar seperti BRI, BNI, Gojek, Pertamina, Siemens.'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs sm:text-sm text-dark mt-2 break-words'
                    />
                    <SplitText
                        as='p'
                        text='Kami menciptakan animasi 100% original dengan aset yang dibuat khusus sesuai kebutuhan bisnis Anda. Efisien, Kreatif, dan Mulai dari Rp 1.000.000.'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs sm:text-sm text-dark break-words mt-2'
                    />
                    <SplitText
                        as='p'
                        text='Bawa Visual Brand Anda ke Tingkat Berikutnya!'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={1.6}
                        className='font-body text-xs sm:text-sm text-dark break-words mt-2'
                    />
                    <Button link={'https://wa.me/628113577793'} target={'_blank'} text={'Contact Us'} />
                </div>
                <div className='w-full md:w-1/2 h-full absolute md:relative top-0 left-0 md:left-auto z-0'><video src={bg} loop muted autoPlay className='h-full w-full object-cover'></video></div>
            </main>
            {/* About */}
            <main className='w-full bg-dark pb-40 sm:pb-60 md:pb-40'>
                <div className='w-[60%] text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-normal tracking-widest font-body text-justify px-3 sm:px-4 md:px-6 pt-6'>
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
                <div ref={achievementsContainerRef} className='w-full mt-20 sm:mt-32 md:mt-40 flex flex-col items-center min-h-[200vh] sm:min-h-[250vh] md:min-h-[300vh]'>
                    <section ref={achievementsRef} className='sticky w-[] top-1/2 transform -translate-y-1/2 flex flex-col md:flex-row items-center justify-around p-4 sm:p-6 md:p-10 lg:p-0 gap-6 md:gap-0'>
                        <TiltedCard
                            imageSrc={achievements[currentAchievementIndex]?.images}
                            altText={achievements[currentAchievementIndex]?.year}
                            captionText={`Blackmotion.id | ${achievements[currentAchievementIndex]?.year}`}
                            containerHeight={{ base: '250px', sm: '280px', md: '300px', lg: '350px' }}
                            containerWidth={{ base: '100%', sm: '90%', md: '400px', lg: '500px' }}
                            imageHeight={{ base: '200px', sm: '240px', md: '280px', lg: '300px' }}
                            imageWidth={{ base: '100%', sm: '90%', md: '90%', lg: '90%' }}
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
                        <div className='text-light py-5 flex flex-col items-start justify-start w-full md:w-auto px-4 md:px-0'>
                            <p className='font-head text-3xl sm:text-4xl md:text-5xl tracking-wider my-6 md:my-10'>
                                {achievements[currentAchievementIndex]?.year}
                            </p>
                            <ul className='flex flex-col items-start justify-start list-disc list-inside sm:list-outside space-y-2 text-sm sm:text-base'>
                                {achievements[currentAchievementIndex]?.items.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className='font-body'>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* CLients */}
                <div
                    className='w-full h-full flex items-center justify-center px-4 sm:px-5 md:px-20 py-8 sm:py-10 md:py-12'
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
                {/* Project CTA */}
                <Button link={'/projects'} text={'Our Projects'} />
                {/* Service */}
                <div className='pt-6 sm:pt-8 md:pt-10'>
                    <p className='text-light pt-5 px-3 sm:px-4 md:px-6 text-base sm:text-lg md:text-xl font-body'>Our Services:</p>
                    <div className='py-4 sm:py-6 flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 items-start md:items-center justify-around'>
                        {services.map((item) => {
                            return (
                                <div key={item.id} className='service-item flex item text-light px-3 sm:px-4 font-body text-base sm:text-lg w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.5rem)] border-b border-b-gray-500 pb-4'>
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
                                        className='text-4xl sm:text-5xl text-gray-500/25 font-head px-2 block' />
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
                                        scrollTriggerStart='top 80%'
                                        className='block' />
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