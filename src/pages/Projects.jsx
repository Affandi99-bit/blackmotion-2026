import React from 'react'
import { SplitText } from '../components'
import { items, design, motion } from '../utils/constant'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            {/* Hero */}
            <main className='min-h-screen w-full bg-gradient-to-b from-light via-light to-dark p-3'>
                <h1 className='text-2xl font-head text-dark pt-28 '>OUR PROJECTS</h1>
                <p className='text-lg font-body tracking-wider text-dark '>A showcase of our most impactful works — from visual storytelling to brand experiences that inspire and connect.</p>
                <div className='pt-20'>
                    <section className="flex items-center just flex-wrap gap-3 w-full">
                        {design.slice(0, 3).map((item, index) => {
                            return (
                                <a href='#' key={index} className='w-96 h-64 bg-green-500 rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0'>
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </a>
                            )
                        })}
                    </section>
                    <p className='w-full pt-10 text-lg font-body tracking-wider text-dark border-b border-dark'>Watch Other</p>
                </div>
                <div className='pt-20 pb-10'>
                    <section className="flex items-center just flex-wrap gap-3 w-full">
                        {motion.slice(0, 3).map((item, index) => {
                            return (
                                <a href='#' key={index} className='w-96 h-64 bg-green-500 rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0'>
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </a>
                            )
                        })}
                    </section>
                    <p className='w-full pt-10 text-lg font-body tracking-wider text-light border-b border-light'>Watch Other</p>
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

export default Projects
