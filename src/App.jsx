import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css';
import React, { useState, useEffect } from 'react'
import Home from './views/Home'; 
import Features from './views/Features'
import Contact from './views/Contact'
import SignIn from './views/SignIn'
import MobileButton from './components/MobileButton'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(prevState => {
      const newState = !prevState;
      localStorage.setItem('themeMode', newState ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newState);
      return newState;
    });
  };

  return (
    <BrowserRouter>
      <MobileButton />
      <div className="wrapper">
        <Header isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
        <main>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} /> {/* Pass isDarkMode to Home */}
            <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

/* hjälp av chatgpt*/


