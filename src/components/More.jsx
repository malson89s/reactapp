import React from 'react'
import CheckCircle from '../assets/images project/bx-check-circle.svg'
import PinkCard from '../assets/images project/contacts-pink-card.svg'
import MoneyTransfer1 from '../assets/images project/money-transfer-1.svg'
import Icon1 from '../assets/images project/icon-1.svg'
import Icon3 from '../assets/images project/icon-3.svg'

const More = () => {
  return (
<section aria-label="offers that are included" id="more">
  <div className="container">
    <div className="grid-item-1">
      <h2>Make your money transfer simple and clear</h2>
    </div>

    <div className="grid-item-2">
      <ul style={{ listStyleImage: `url(${CheckCircle})` }}>
        <li>Banking transactions are free for you</li>
        <li>No monthly cash commission</li>
        <li>Manage payments and transactions online</li>
      </ul>
      <div className="btn-2">
        <a id="Learn-more" href="#" className="btn-primary">
          <span>Learn more</span>
          <i id="arrow" className="fa-light fa-arrow-right"></i>
        </a>   
      </div>
    </div>

    <div className="grid-item-4">
      <img src={PinkCard} alt="shows contacts with pink card popping out" />
    </div>

    <div className="grid-item-5">
      <img src={MoneyTransfer1} alt="budget graph money transfer" />
    </div>

    <div className="grid-item-6">
      <h2>Receive payment from international bank details</h2>
    </div>

    <div className="grid-item-7">
      <img className="icon-1" src={Icon1} alt="pink card icon" />
      <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
      
      <div className="btn-2">
        <a id="Learn-more" href="#" className="btn-primary">
          <span>Learn more</span>
          <i id="arrow" className="fa-light fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <div className="grid-item-8">
      <img className="icon-3" src={Icon3} alt="pink wallet icon" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minus nam.</p>
    </div>
  </div>
</section>
  )
}

// Hjälp hämtad från chatgpt

export default More