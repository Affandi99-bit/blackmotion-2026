import React, { useEffect, useRef, useState } from 'react'
import { achievements } from '../../utils/constant'
import { gsap } from 'gsap'
import { TiltedCard } from '../../components'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
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
    )
}

export default Achievement