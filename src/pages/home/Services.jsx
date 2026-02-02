import React from 'react'
import { services } from '../../utils/constant'
import { SplitText } from '../../components'

const Services = () => {
    return (
        <div className='pt-6 sm:pt-8 md:pt-10'>
            {/* <p className='text-light pt-5 px-3 sm:px-4 md:px-6 text-base sm:text-lg md:text-xl font-body'>Our Services:</p> */}
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
    )
}

export default Services