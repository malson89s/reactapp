import React from 'react'
import PinkCard from '../assets/images project/phone-pink-card.svg'
import Icon1 from '../assets/images project/icon-1.svg'
import Icon2 from '../assets/images project/icon-2.svg'
import Icon3 from '../assets/images project/icon-3.svg'
import Icon4 from '../assets/images project/icon-4.svg'
import Icon5 from '../assets/images project/icon-5.svg'
import Icon6 from '../assets/images project/icon-6.svg'

const Features = () => {
  return (
    <section aria-label="Read more about app features" id="features">

    <div className="container">
     <div className="images">
       <img className="img-phone" src={PinkCard} alt="an iphone with a credit card popping out" />
      </div>

      <div className="grid-item-1">
       <h1>App Features</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur, dolor, unde quis nobis molestias ex aut magnam reiciendis temporibus voluptatibus. Facere voluptas quod laboriosam!</p>
      </div>
      <div className="grid-item-2">
       <img className="icon-1" src={Icon1} alt="pay-card icon" />
       <div className="grid-text">
       <h5>Easy Payments</h5>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus.</p>
      </div>
     </div>

    <div className="grid-item-3">
     <img className="icon-2" src={Icon2} alt="statistic icon" />
     <div className="grid-text">
     <h5>Cost Statistics</h5>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum corporis magnam?</p>
    </div>
   </div>
    <div className="grid-item-4">
     <img className="icon-3" src={Icon3} alt="wallet icon" />
     <div className="grid-text">
       <h5>Regular Cashback</h5>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, fugit?</p>
    </div>
   </div>
    <div className="grid-item-5">
     <img className="icon-4" src={Icon4} alt="sequrity icon" />
     <div className="grid-text">
        <h5>Data Security</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde!</p>
    </div>
   </div>
    <div className="grid-item-6">
     <img className="icon-5" src={Icon5} alt="support icon" />
     <div className="grid-text">
      <h5>Support 24/7</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, in hic?</p>
    </div>
   </div>
    <div className="grid-item-7">
     <img className="icon-6" src={Icon6} alt="smiley icon" />
     <div className="grid-text">
       <h5>Top Standards</h5>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit repellat sed quos! Animi.</p>
    </div>
   </div>
  </div>
 </section> 
  )
}

export default Features