import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from '../pages/Home.tsx'
import About from '../pages/About.tsx'
import Blog from '../pages/Blog.tsx'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
