import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from './views/Home'
import Features from './views/Features'
import Contact from './views/Contact'
import SignIn from './views/SignIn'
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
         <Route path="/home" element={<Home />} />
         <Route path="/features" element={<Features />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </main> 
      <Footer />
     </div>
    </BrowserRouter>
  )
}

export default App
