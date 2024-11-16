import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const ClientTestimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = async () => { 
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      const data = await res.json()
      setTestimonials(data)
    }

    useEffect(() => {
      getTestimonials()
    }, [])

  return (
    <section id="testimonials-wrapper" >       
        <div className="client-testimonials">
            <div className="second-column, third-column">
                <div className="testimonials">
                 <h2 className="first-column">Clients are <br /> Loving Our App</h2>
                  {
                    testimonials.map((testimonial) => (
                      <Testimonial key={testimonial.id} item={testimonial} />
                    ))
                  }
                
                 </div>
                </div>
                </div>
    </section>
  )
}

export default ClientTestimonials
