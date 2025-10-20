import React from 'react'
import { SplitText, Footer } from '../components'
import { items, design, motion } from '../utils/constant'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            {/* Hero */}
            <main className='min-h-screen w-full bg-gradient-to-b from-light via-light to-dark p-3 pb-40'>
                <h1 className='text-2xl font-head text-dark pt-28 '>OUR PROJECTS</h1>
                <p className='text-lg font-body tracking-wider text-dark '>A showcase of our most impactful works — from visual storytelling to brand experiences that inspire and connect.</p>
                <div className='pt-20'>
                    <Link to={'/projects/design'} className='w-full pt-10 text-lg font-body tracking-wider text-dark border-b border-dark'>Watch Other</Link>
                    <section className="flex items-center just flex-wrap gap-3 w-full pt-3">
                        {design.slice(0, 3).map((item, index) => {
                            return (
                                <a href='#' key={index} className='w-96 h-64 bg-green-500 rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0'>
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </a>
                            )
                        })}
                    </section>
                </div>
                <div className='pt-20'>
                    <Link to={'/projects/motion'} className='w-full pt-10 text-lg font-body tracking-wider text-dark border-b border-dark'>Watch Other</Link>

                    <section className="flex items-center just flex-wrap gap-3 w-full pt-3">
                        {motion.slice(0, 3).map((item, index) => {
                            return (
                                <a href='#' key={index} className='w-96 h-64 bg-green-500 rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0'>
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </a>
                            )
                        })}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Projects
