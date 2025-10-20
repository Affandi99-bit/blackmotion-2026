import React from 'react'
import { design } from '../utils/constant'
import { Footer } from '../components'
const Design = () => {
    return (
        <div className='py-20'>
            <section className="flex items-center justify-center flex-wrap gap-3 w-full pt-3">
                {design.map((item, index) => {
                    return (
                        <a href='#' key={index} className='w-96 h-64  rounded-xl border border-light overflow-hidden grayscale hover:grayscale-0'>
                            <img src={item.image} alt="" className='w-full h-full object-cover' />
                        </a>
                    )
                })}
            </section>
            <Footer />
        </div>
    )
}

export default Design