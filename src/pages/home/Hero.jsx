import React from 'react'
import { bg } from '../../assets'
import { SplitText, Button } from '../../components'
const Hero = () => {
    return (
        <main className='w-[full] h-[70dvh] md:h-screen relative flex flex-col md:flex-row items-start bg-[#f3f3f3] overflow-hidden'>
            <div className='z-10 flex flex-col justify-center items-start md:justify-end p-4 sm:p-5 h-full w-full md:w-1/2 relative'>
                <SplitText
                    as='h2'
                    text='Percayakan Animasi Anda pada Ahlinya pada'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.1}
                    className='font-body text-xl sm:text-sm text-dark mt-10 break-words'
                />
                <SplitText
                    as='h1'
                    text='BLACKMOTION.ID'
                    type='chars'
                    stagger={0.03}
                    fromY={24}
                    duration={0.8}
                    delay={1.2}
                    className='font-head tracking-widest text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-dark mt-2'
                />
                <SplitText
                    as='p'
                    text='CV. KREASI RUMAH HITAM | JI. Suropati Gg.9 No.20, RT.I/RW.8, Pesanggrahan,Kec.Batu, Kota Batu, Jawa Timur 65313'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.6}
                    className='font-body text-xs sm:text-sm text-dark mt-2 break-words'
                />
                <SplitText
                    as='p'
                    text='Selesai dalam 2 Hari!'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.6}
                    className='font-body text-2xl sm:text-sm md:text-lg lg:text-xl text-dark mt-10 font-bold tracking-wider break-words'
                />
                <SplitText
                    as='p'
                    text='Kami telah dipercaya oleh banyak brand besar seperti BRI, BNI, Gojek, Pertamina, Siemens.'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.6}
                    className='font-body text-xs sm:text-sm text-dark mt-2 break-words'
                />
                <SplitText
                    as='p'
                    text='Kami menciptakan animasi 100% original dengan aset yang dibuat khusus sesuai kebutuhan bisnis Anda. Efisien, Kreatif, dan Mulai dari Rp 1.000.000.'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.6}
                    className='font-body text-xs sm:text-sm text-dark break-words mt-2'
                />
                <SplitText
                    as='p'
                    text='Bawa Visual Brand Anda ke Tingkat Berikutnya!'
                    type='words'
                    stagger={0.02}
                    fromY={16}
                    duration={0.6}
                    delay={1.6}
                    className='font-body text-xs sm:text-sm text-dark break-words mt-2'
                />
                <Button link={'https://wa.me/628113577793'} target={'_blank'} text={'Contact Us'} className={'mt-20'} />
            </div>
            <div className='w-full md:w-1/2 h-full absolute md:relative top-0 left-0 md:left-auto z-0'><video src={bg} loop muted autoPlay className='h-full w-full object-cover'></video></div>
        </main>
    )
}

export default Hero