import React, { useState } from 'react'
import Notification from '../assets/images project/bell.svg'

const Subscribe = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Must be a valid email (e.g. username@example.com)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsValid(true);
      setIsSubmitted(true);
      console.log('Form is valid');
    } else {
      setIsValid(false);
      setIsSubmitted(false);
      console.log('Form is invalid');
    }
  };

  return (
    <form
      className="subscribe-form"
      aria-label="subscribe to our newsletter"
      id="subscribe"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="container">
        <div className="bell">
          <img src={Notification} alt="notification icon" />
        </div>
        <div className="header">
          <h4 className="headline">Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>
        <div className="form-group">
          <span className="email">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </span>
          <button type="submit" className="btn" id="submit-btn">
            Subscribe
          </button>
        </div>


        {errors.email && <span className="validation-error">{errors.email}</span>}

        {isSubmitted && isValid && (
          <div className="success-message">
            <p>Thank you for subscribing!</p>
          </div>
        )}
      </div>
    </form>
  )
}

export default Subscribe