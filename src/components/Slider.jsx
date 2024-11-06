import React from 'react'
import PhoneSlide1 from '../assets/images project/phone-slide-1.svg'
import PhoneSlide2 from '../assets/images project/phone-slide-2.svg'
import PhoneSlide3 from '../assets/images project/phone-slide-3.svg'

const Slider = () => {
  return (
<section aria-label="How does it work" className="slider">
    <div className="container">
      <h1>How does it work?</h1>

      <div className="carousel">
        <div className="carousel-item">
          <img src={PhoneSlide1} alt="my budget info on phone slide-1" />
        </div>
        <div className="carousel-item">
          <img src={PhoneSlide2} alt="your cards info on phone slide-2" />
        </div>
        <div className="carousel-item">
          <img src={PhoneSlide3} alt="transfer info on phone slide-3" />
        </div>
      </div>


      <div className="text">
        <h3 className="h4">Latest transaction history</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et fuga animi provident temporibus beatae repellat dicta laudantium atque.</p>
      </div>

    </div>
  </section>
  )
}

export default Slider