import React, { useState } from 'react'
import Notification from '../assets/images project/bell.svg'

const Subscribe = () => {
  const [options, setOptions] = useState([{ id: 1, text: "Subscribe" }])
  const [formData, setFormData] = useState({ email: '', category: options[0].id, });
  const [errors, setErrors] = useState({});

  const getDataUsingFetch = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe')
    setTestimonialsItems(await res.json())
}

  const validateField = (value) => { 
    let error = ''

    if ('email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
    error = "Must be an valid email (eg. username@example.com)."
    }

    setErrors(preventErrors => ({...prevErrors, [email]: error }) )

  }


  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = "Must be an valid email (eg. username@example.com)."
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0;
  }


const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({...formData, [email]: value })
};

const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        console.log('form valid')
        // fetch('https://api.domain.com/api/forms/subscribe', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
    }
    else {
      console.log('form invalid')
    }
}



  return (
   <>
    <form className="subscribe-form" aria-label="subscribe to our newsletter" id="subscribe" onSubmit={handleSubmit} noValidate>

    <div className="container">
      <div className="bell">
        <img src={Notification} alt="notifikations-icon" />
      </div>
      <div className="header">
        <h4 className="headline">Subscribe to our newsletter to stay  informed about latest updates</h4>  
      </div>
      <div className="form-group">
        <span className='email'><input type="email" name="email" placeholder=" Your Email" value={formData.email} onChange={handleInputChange} required /></span>
        {errors.email && <span className="validation-error">{errors.email}</span>}
        <button type="submit" className="btn" id="submit-btn">Subscribe</button>
     </div>
    </div>
  </form>
  </>
  )
}

export default Subscribe