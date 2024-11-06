import React from 'react'
import LogoType from '../assets/images project/brand-1.svg'
import LogoType2 from '../assets/images project/brand-2.svg'
import LogoType3 from '../assets/images project/brand-3.svg'
import LogoType4 from '../assets/images project/brand-4.svg'
import LogoType5 from '../assets/images project/brand-5.svg'
import LogoType6 from '../assets/images project/brand-6.svg'


const Brands = () => {
  return (
    <section aria-label="our customers" id="brands">
    <div className="container">
      <div id="brand-1" className="brand-box">
        <img src={LogoType} alt="loggo of comapy a" />
      </div>
      <div id="brand-2" className="brand-box">
        <img src={LogoType2} alt="loggo of comapy b" />
      </div>
      <div id="brand-3" className="brand-box">
        <img src={LogoType3} alt="loggo of comapy c" />
      </div>
      <div id="brand-4" className="brand-box">
        <img src={LogoType4} alt="loggo of comapy d" />
      </div>
      <div id="brand-5" className="brand-box">
        <img src={LogoType5} alt="loggo of comapy e" />
      </div>
      <div id="brand-6" className="brand-box">
        <img src={LogoType6} alt="loggo of comapy f" />
      </div>
      </div>
    </section>

  )
}

export default Brands