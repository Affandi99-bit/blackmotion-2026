import React from 'react'
import { Navbar, SmoothScroll } from './components'
import { Home } from './pages'
import { items } from './utils/constant'
const App = () => {
  return (
    <>
      <SmoothScroll />
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
      <Home />
    </>
  )
}

export default App