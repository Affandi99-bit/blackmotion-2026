import React from 'react'
import { Hero, SplitText } from '../components'
import { items } from '../utils/constant'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            {/* Hero */}
            <main className='w-full h-screen relative'>
                <Hero animationType="rotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0.5}
                    glow={1} />
                <div className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <SplitText
                        as='h1'
                        text='OUR PROJECTS'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        className='text-center font-head text-4xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='Explore our portfolio of creative design and motion graphics projects.'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={0.15}
                        className='text-center font-body text-xs text-dark mt-2'
                    />
                </div>
            </main>

            {/* Projects Content */}
            <main className='w-full h-screen relative bg-gradient-to-b from-transparent via-black/25 to-transparent flex items-center justify-center'>
                <div className='text-center max-w-4xl px-8'>
                    <h2 className='text-3xl font-head text-dark mb-8'>Design & Motion</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
                            <h3 className='text-xl font-head text-dark mb-4'>Design Projects</h3>
                            <p className='text-sm font-body text-dark'>
                                Creative visual design solutions that capture attention and communicate effectively.
                            </p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6'>
                            <h3 className='text-xl font-head text-dark mb-4'>Motion Graphics</h3>
                            <p className='text-sm font-body text-dark'>
                                Dynamic animations and motion graphics that bring static designs to life.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <main className='w-full h-[80vh] relative flex items-start'>
                <p className='absolute top-1 left-1 text-dark text-8xl/20 font-body font-semibold'>CONTACT</p>
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

export default Projects
