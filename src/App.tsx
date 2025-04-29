import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#6f9ee6fb] to-[#0e2d49] relative py-12">
      <div 
        className="relative z-10 w-[90%] max-w-[1920px] min-w-[900px] rounded-3xl border border-white/45 bg-white/20 shadow-2xl backdrop-blur-md"
        style={{ boxShadow: "0 0px 40px rgba(0, 0, 0, 1)" }}
      >
        <Header onOpenModal={() => setIsModalOpen(true)} />
        <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        </BrowserRouter>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
