import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

const faq = () => {
  const [accordions, setAccordions] = useState([])

  const fetchFaq = async () => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
      const data = await res.json()
      setAccordions(data)
  }

  useEffect(() => {
    fetchFaq()
  }, [])

  return (
  <section id="faq" className="faq">
    <div className="container">
      <div className="first-column">
        <h2>Any questions?<br />Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch</p>
        <div className="contact-options">
          <div className="option-phone">
              <i className="fa-solid fa-phone-volume"></i>
              <p>Still have any questions?</p>
              <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="option-chat">
              <i className="fa-solid fa-comment dots fa-flip-horizontal"></i>
              <p>Dont't like phone calls?</p>
              <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a> 
           </div>
          </div>
        </div>
        <div className="second-column">
        <div className="accordion">

          {
            accordions.map(item => (
              <AccordionItem key={item.id} item={item} />
            ))
          }
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default faq