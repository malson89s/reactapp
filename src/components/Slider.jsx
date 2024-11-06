import React from 'react'

const Slider = () => {
  return (
<section aria-label="How does it work" className="slider">
    <div className="container">
      <h2>How does it work?</h2>

      <div className="carousel">
        <div className="carousel-item">
          <img src="images project/phone-slide-1.svg" alt="my budget info on phone slide-1" />
        </div>
        <div className="carousel-item">
          <img src="images project/iPhone-12-slide-2.svg" alt="your cards info on phone slide-2" />
        </div>
        <div className="carousel-item">
          <img src="images project/phone-slide-3.svg" alt="transfer info on phone slide-3" />
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