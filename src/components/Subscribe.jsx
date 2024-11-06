import React from 'react'
import Notification from '../assets/images project/bell.svg'

const Subscribe = () => {
  return (
    <aside aria-label="subscribe to our newsletter" id="subscribe">

    <div className="container">
      <div className="logo">
        <img src={Notification} alt="notifikations-icon" />
      </div>
      <div className="info">
        <h4 className="headline">Subscribe to our newsletter to stay  informed about latest updates</h4>  
      </div>
      <div className="input-group">
        <i className="fa-thin fa-envelope icon"></i>
        <input className="form-input email" type="email" placeholder=" Your Email" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  </aside>
  )
}

export default Subscribe