import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Address.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Card 1: Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3 className="contact-card-title">ADDRESS LINE</h3>
<<<<<<< HEAD
          <p>Bowery St & 5th, New York, 57, USA</p>
          <p>NY 10013, USA</p>
=======
          <p>186,Perambur Barack Road,</p>
          <p>Pattalam, Purasavakkam</p>
          <p>Chennai</p>
>>>>>>> 9825442 (add zahoor master)
        </div>

        {/* Card 2: Phone - highlighted in red (or gold) */}
        <div className="contact-card contact-card-highlight">
          <FaPhone className="contact-icon" />
          <h3 className="contact-card-title">PHONE NUMBER</h3>
<<<<<<< HEAD
          <p>+255 - 989 - 952 / 234 - 129</p>
          <p>+255 - 980 - 8259</p>
=======
          <p>9840540457</p>
>>>>>>> 9825442 (add zahoor master)
        </div>

        {/* Card 3: Mail */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3 className="contact-card-title">MAIL ADDRESS</h3>
<<<<<<< HEAD
          <p>email@example.com</p>
          <p>info@yourdomain.com</p>
=======
          <p>zahoorbriyani@gmail.com</p>
>>>>>>> 9825442 (add zahoor master)
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
