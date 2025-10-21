import React from 'react'
import { SplitText, Footer, Posters } from '../components'
import { items, design, motion } from '../utils/constant'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='w-full'>
            <p className="absolute text-light font-body font-semibold tracking-wider text-9xl inset-20">Projects</p>
            <div className="absolute w-40 bottom-10 right-10 text-light">
                <p className='font-body font-semibold text-justify tracking-wider text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda mollitia minus facilis illo repudiandae nihil praesentium animi, deserunt exercitationem laborum.</p>
                <div className='w-full pt-5 flex items-end justify-between gap-1 font-body font-semibold tracking-wider text-xs'>
                    <Link className='border-b border-gray-400 flex items-center gap-1 z-50' to={'/projects/design'}>Design <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </Link>
                    <Link className='border-b border-gray-400 flex items-center gap-1 z-50' to={'/projects/motion'}>Motion <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
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
