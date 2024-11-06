import React from 'react'

const Testimonials = () => {
  return (
    <section aria-label=" read more about customers reviews" id="testimonials">

    <div className="flex-container">
      
      <div className="flexbox">
          <div className="title">  
          <h2>Clients are Loving Our App</h2> 
         </div>
    
       <div className="card-1" >
          <div className="img-1">
            <img src="images project/icon-blue.svg" alt="quotation mark" />
          </div>
          <div className="star">
           <img src="images project/rating-4.svg" alt="four star rating" />
          </div>
          <div className="text">
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, enim velit! Earum, officiis pariatur possimus consequuntur vel repudiandae dolores sint temporibus nesciunt labore atque quidem aperiam. </p>
          </div>
      
         <div className="customer">
           <div className="face"><img src="images project/fannie.svg" alt="client picture name Fannie" /></div>
          <div className="name">
          <h3>Fannie Summers</h3>
          <p>Designer</p>
          
         </div>
        </div>
       </div>


       <div className="card-2">
         <div className="img-2">
          <img src="images project/icon-blue.svg" alt="quotation mark" />
         </div>
         <div className="star">
          <img src="images project/rating-5.svg" alt="five star rating" />
         </div>
         <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quas, magni repellat dolor suscipit aperiam ipsam eligendi, a nisi necessitatibus eveniet voluptatum blanditiis dolore? Unde, repellendus error!</p>
         </div>
         <div className="customer"> 
          <div className="face"><img src="images project/albert.svg" alt="client picture name albert" /></div>
         <div>
          <h3>Albbert Flores</h3>
          <p>Developer</p>
         </div>
       </div>
     </div>
   </div>
  </div> 
  </section>
    
  )
}

export default Testimonials