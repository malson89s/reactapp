import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Services from './views/Services'

import MobileButton from './components/MobileButton'
import Header from './components/Header'
import Footer from './components/Footer'





function App() {


  return (
    <BrowserRouter>
     <MobileButton />
     <div className="wrapper">
       <Header />
       <main>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/projects" element={<Projects />} />
        </Routes>
        
 
 

        <Footer />
      </main> 

      
     </div>
    </BrowserRouter>
  )
}

export default App
