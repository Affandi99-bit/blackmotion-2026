import React from 'react'
import { Hero, SplitText } from '../components'

const Home = () => {
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
                        as='p'
                        text='BLACKMOTION.ID'
                        type='chars'
                        stagger={0.03}
                        fromY={24}
                        duration={0.8}
                        className='text-center font-head text-4xl text-dark'
                    />
                    <SplitText
                        as='p'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem nulla repellat omnis voluptatem velit excepturi! Ullam magni facilis asperiores!'
                        type='words'
                        stagger={0.02}
                        fromY={16}
                        duration={0.6}
                        delay={0.15}
                        className='text-center font-body text-xs text-dark mt-2'
                    />
                </div>
            </main>
            {/* About */}
            <main className='w-full h-screen relative bg-gradient-to-b from-transparent to-dark'>

            </main>
        </div>
    )
}

export default Home