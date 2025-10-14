import React from 'react'
import { SplitText } from '../components'
import { achievements, items, services } from '../utils/constant'
import { Link } from 'react-router-dom'
import { bg, client } from '../assets'

const Home = () => {
    return (
        <div>
            {/* Hero */}
            <main className='w-full h-screen relative flex items-start bg-[#f3f3f3]'>
                <div className='flex flex-col justify-end p-3 h-full w-1/2'>
                    <SplitText
                        as='h1'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        className='font-head tracking-widest text-6xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='CV. KREASI RUMAH HITAM | JI. Suropati Gg.9 No.20, RT.I/RW.8, Pesanggrahan,Kec.Batu, Kota Batu, Jawa Timur 65313'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={0.15}
                        className='font-body text-xs text-dark mt-2'
                    />
                </div>
                <div className='w-1/2 h-full'><video src={bg} loop muted autoPlay className='h-full w-full object-cover'></video></div>
            </main>
            {/* About */}
            <main className='w-full min-h-screen relative bg-dark'>
                <p className='text-gray-400 text-2xl tracking-wider font-body text-justify px-3 pt-6'>
                    <span className='text-light font-semibold tracking-widest'>BLACKMOTION.ID</span> created in 2020 and we work in various aspects of multimedia such as <span className='text-light font-semibold tracking-widest'>Design, Motion Graphics
                        and 3D.</span> We develop methods that always <span className='text-light font-semibold tracking-widest'>provide solutions and innovations to clients</span> so that all ideas and expectations we give
                    are always <span className='text-light font-semibold tracking-widest'>more than what expected.</span> We partner with different companies and personalities who keep us <span className='text-light font-semibold tracking-widest'>learning new things.</span>
                    The result is a very well maintained sustainability in subsequent projects. The last thing that is always embedded in our mindset
                    is to be the <span className='text-light font-semibold tracking-widest'>best creative partner in the client's heart.</span></p>
                <div>
                    {achievements.map((item, index) => {
                        return (
                            <div key={index} className='text-light'>
                                <p className='font-head text-xl tracking-wider'>{item.year}</p>
                                <ul className='flex flex-col'>
                                    <li className='font-body'>{item.items}</li>
                                </ul>
                            </div>
                        )
                    })}
                    <Link to={'/projects'} className='text-light pt-5 px-3 text-lg font-body'>Recent Projects</Link>
                </div>
                <p className='text-light pt-5 px-3 text-lg font-body'>Our Services:</p>
                <div className='py-6 flex flex-wrap gap-10 items-center justify-around'>
                    {services.map((item) => {
                        return <p key={item.id} className='text-light px-3 font-body text-lg w-1/3 border-b border-b-gray-500'><span className='text-5xl text-gray-500/25 font-head'>0{item.id}</span> {item.title}</p>
                    })}
                </div>
                <p className='text-light pt-5 px-3 text-lg font-body'>Clients:</p>
                <div className='w-full h-full flex items-center justify-center px-20 py-12'>
                    <img src={client} className='object-contain w-full h-full' alt="" />
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

export default Home