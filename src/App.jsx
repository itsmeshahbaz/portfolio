import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import '../src/App.css'


function App() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-cyan-800 via-gray-600 via-30% to-black text-white">
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-gray-700 via-gray-800 via-black via-gray-700 via-gray-800 to-gray-600 text-white">
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />

    </Routes>
    <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
