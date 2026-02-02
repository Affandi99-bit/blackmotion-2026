import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, SmoothScroll, FloatCTA } from './components'
import { Home, Projects, Contact, Design, Motion } from './pages'
import Transition from './utils/Transition'
import { items } from './utils/constant'

const App = () => {
  return (
    <main className='bg-dark'>
      <SmoothScroll />
      <FloatCTA />
      <Navbar
        logo='/logo.png'
        logoAlt="Blackmotion.id Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <Transition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/projects/motion" element={<Motion />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Transition>
    </main>
  )
}

export default App