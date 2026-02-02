import React from 'react'
import { design } from '../../utils/constant'

const ProjectHighlight = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center flex-wrap gap-5 mt-10'>
            {design.map((i, index) => {
                return (
                    <div key={index} className='flex flex-col justify-between items-center w-72 h-64 overflow-hidden text-light '>
                        <p className='text-xs w-full flex justify-between items-start mb-2 font-boody'>[ {index} ]</p>
                        <p className='text-xs w-full flex justify-between items-start mb-5 font-body tracking-wider'>{i.title}</p>
                        <img src={i.image} alt={i.title} className='w-full h-64 object-cover ' />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectHighlight