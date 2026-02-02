import React from 'react'
import { SplitText, Footer, Posters } from '../../components'
import { items, design, motion } from '../../utils/constant'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='w-full relative'>
            <p className="absolute text-light font-body font-semibold tracking-wider text-5xl md:text-7xl lg:text-9xl top-20 sm:top-8 md:top-12 lg:top-20 left-4 sm:left-8 md:left-12 lg:left-20 z-10 pointer-events-none">Projects</p>
            <div className="absolute w-64 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 text-light z-10 p-4 sm:p-5 md:p-6">
                <p className='font-body font-semibold text-justify tracking-wider text-xs mb-4 sm:mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda mollitia minus facilis illo repudiandae nihil praesentium animi, deserunt exercitationem laborum.</p>
                <div className='w-full pt-3 sm:pt-4 md:pt-5 flex items-end justify-between gap-2 sm:gap-3 md:gap-4 font-body font-semibold tracking-wider text-xs'>
                    <Link className='border-b border-gray-400 flex items-center gap-1 z-50 hover:opacity-75 transition-opacity' to={'/projects/design'}>Design <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 sm:size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </Link>
                    <Link className='border-b border-gray-400 flex items-center gap-1 z-50 hover:opacity-75 transition-opacity' to={'/projects/motion'}>Motion <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 sm:size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </Link>
                </div>
            </div>
            <Posters items={[...design, ...motion].map(item => item.image)} className={'h-screen w-full'} />
        </div>
    )
}

export default Projects
