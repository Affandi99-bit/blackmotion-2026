import React from 'react'
import { SplitText } from '../../components'
import CardSwap, { Card } from '../../components/CardSwap'
const About = () => {
    return (
        <div className='w-full h-screen pt-10 flex items-start justify-start text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-normal tracking-widest font-body text-justify px-3 sm:px-4 md:px-6'>
            <div className='w-1/2'>
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
            <div className='w-1/2 font-body'>
                <div style={{ height: '600px', position: 'relative' }}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <h3 className='px-3 font-body'>Solid Teams</h3>
                            <img src="https://picsum.photos/seed/design2/800/600" alt="" className='w-full h-full object-cover' />
                        </Card>
                        <Card>
                            <h3 className='px-3 font-body'>Flawless Projects</h3>
                            <img src="https://picsum.photos/seed/design2/800/600" alt="" className='w-full h-full object-cover' />
                        </Card>
                        <Card>
                            <h3 className='px-3 font-body'>Happy Clients</h3>
                            <img src="https://picsum.photos/seed/design2/800/600" alt="" className='w-full h-full object-cover' />
                        </Card>
                    </CardSwap>
                </div>
            </div>
        </div>
    )
}

export default About