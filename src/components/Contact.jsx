// Contacts.jsx
import React, { useState } from 'react';
import Links from './Links';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert('Please fill in all input fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    console.log('Form Data:', formData);

    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });

    alert('Request submitted successfully!');
  };

  return (
    <>
      <Links />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4">Contact Information</h3>
            <div className="mb-3">
              <h4>Phone</h4>
              <p>(+254) 112043557</p>
              <p>(+254) 104007688</p>
            </div>
            <div className="mb-3">
              <h4>Email</h4>
              <p>alexigikungu.012@gmail.com</p>
              <p>alegikungu.012@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-4">Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onMouseOver={() => console.log('Mouse over!')}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
