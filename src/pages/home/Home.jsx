import React from 'react'
import { Footer, Button } from '../../components'
import Hero from './Hero'
import About from './About'
import Achievement from './Achievement'
import Clients from './Clients'
import Services from './Services'
import ProjectHighlight from './ProjectHighlight'


const Home = () => {

    return (
        <div className='relative'>
            <Hero />
            <main className='w-full bg-dark pb-40 sm:pb-60 md:pb-40'>
                <About />
                <Achievement />
                <Services />
                <ProjectHighlight />
                <Button link={'/projects'} text={'View More'} />
                <Clients />
            </main>
            <Footer />
        </div>
    )
}

export default Home