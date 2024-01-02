// Contacts.jsx
import React, { useState } from 'react';
import Links from './Links';
import Footer from './Footer';
// import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 // ... (previous code)

const handleSubmit = (e) => {
  e.preventDefault();

  // Check if any input field is empty
  if (
    !formData.fullName.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    alert('Please fill in all input fields');
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Log the form data to the console for now
  console.log('Form Data:', formData);

  // Clear the form after submission
  setFormData({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // Display an alert when the submit button is clicked
  alert('Request submitted successfully!');
};

// ... (remaining code)


  return (
    <>
      <Links />
      <div className='contact-container'>
        <div className='two'>
          <div className='address'>
            <h3>Contacts</h3>
            <p>(+254) 112043557</p>
            <p>(+254) 104007688</p>
          </div>

          <div className='address'>
            <h3>Email</h3>
            <p>alexigikungu.012@gmail.com</p>
            <p>alegikungu.012@gmail.com</p>
          </div>
        </div>

        <div className='touch'>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              className='conts'
              type='text'
              placeholder='Full names'
              name='fullName'
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              className='conts'
              type='text'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
              title='Please enter a valid email address'
            />
            <input
              className='conts'
              type='text'
              placeholder='Subject'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              className='mess'
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button
              type='submit'
              onClick={() =>(handleSubmit)}
              onMouseOver={() => console.log('Mouse over!')}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contacts;
