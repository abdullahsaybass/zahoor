import React, { useState } from "react";
import "./Map.css";

function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an email service or an API call here
    console.log("Form Submitted:", formData);
    alert("Thank you for getting in touch!");
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section">
      {/* 
        contact-box => new class that gives a "box" look:
        background, border, shadow, etc.
      */}
      <div className="contact-wrapper contact-box">
        {/* Left Column: Map & Info */}
        <div className="contact-left">
          <h2 className="contact-heading">GET IN TOUCH</h2>
          <p className="contact-description">
<<<<<<< HEAD
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            fugiat perspiciatis cumque explicabo assumenda doloribus.
=======
          Have a special event or craving a delicious feast? Zahoor Biryani Catering S
          ervice is here to serve you! Contact us for mouthwatering biryanis and delightful 
          catering solutions.
>>>>>>> 9825442 (add zahoor master)
          </p>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-right">
          <h2 className="contact-heading">FILL UP THE FORM</h2>
          <p className="contact-description">
<<<<<<< HEAD
            Your email address will not be published. Required fields are marked
=======
            We’d love to serve you! Get in touch with Zahoor Biryani Catering Service for inquiries and orders
>>>>>>> 9825442 (add zahoor master)
            *
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
<<<<<<< HEAD
                placeholder="(123) 456-7890"
=======
                placeholder="+91"
>>>>>>> 9825442 (add zahoor master)
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Enter Your Message Here</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
