import React from 'react'

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  }
  return (
    <form className="contact-form">
      <label className="contact-name">Name:</label>
      <input type="text" id="name-box" name="name" required />
      
      <label className="contact-email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label className="contact-msg">Message:</label>
      <textarea id="msg-box" name="message" required/>
      
      <button type="submit" className="submit-btn">Send</button>
    </form>
  )
}

export default Form