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
    <div className="p-8 border-77 border-gray-300 rounded">
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
