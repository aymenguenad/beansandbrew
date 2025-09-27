import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import logo from './assets/_Bean & Brew_logo.png'
import cartIcon from './assets/shopping-cart.png'

import HomePage from './pages/HomePage'



function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <nav>
            <div className='logoBox'>
              <img src={logo} alt="logo" />
            </div>
            <div className='navBar'>
              <a href="">Home Page</a>
              <a href="">About us</a>
              <a href="">Services</a>
            </div>
            <button><img id='cart' src={cartIcon} alt="cart" /></button>
          </nav>
          <Routes>
            <Route path='/beansandbrew/' element={<HomePage />}/>
          </Routes>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
