import React from 'react'
import LogoType from '../assets/images project/appstore.svg'
import Image from '../assets/images project/googleplay.svg'
import IphoneMyBudget from '../assets/images project/iphone-mybudget_desktop.svg'
import IphoneYourCards from '../assets/images project/iphone-yourcards_desktop.svg'

const Hero = () => {
  return (
    <section id="hero">
    <div className="container"> 


      <div className="headline">
       <h1>Manage All Your Money in One App</h1>
      </div>
      <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="buttons">
         
         <a className="btn-download-app" href="#">
           <span className="sr-only">Download on the App Store</span>
           <img src={LogoType} alt="download appstore button" />
         </a>
        
         <a className="btn-download-app" href="#">
           <span className="sr-only">Get it on Google Play</span>
           <img src={Image} alt="get it on googleplay button" />
         </a>
         </div>
              <a href="#" className="discover-more">
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
                <span>Discover more</span>
              </a>
     </div>
     <div className="images">
       <img className="img-back" src={IphoneMyBudget} alt="iphone displaying graph credit" />
       <img className="img-front" src={IphoneYourCards} alt="iphone displaying credit card" />
     </div>
     
   </div>
 </section>
  )
}

export default Hero