import React from "react";
import "./Serviceheader.css";
import { assets } from "../assets/assests";

function Welcome() {
  return (
    <section className="service-welcome-section">
      <div className="service-welcome-container">
        {/* Left Column: Title, Subtitle, Paragraphs, Button */}
        <div className="service-welcome-text">
          <h2 className="service-welcome-title"> ZAHOOR BRIIYANI CATERING</h2>
          <div className="service-welcome-subtitle">WHO WE ARE</div>
          <p className="service-welcome-description">
            At Zahoor Biryani Catering, we push the boundaries of traditional catering with bold flavors and an unapologetic attitude. Our journey began with a passion for extraordinary taste and has evolved into a vibrant culinary experience.
          </p>
          <p className="service-welcome-description">
            We pride ourselves on crafting unforgettable events, combining authentic recipes with creative presentation. Whether it’s an intimate gathering or a large corporate affair, our dedicated team ensures every detail is served with style.
          </p>
          <button className="service-welcome-btn">LEARN MORE</button>
        </div>

        {/* Right Column: Main Image */}
        <div className="service-welcome-image">
          <img src={assets.briys1} alt="Zahoor Biryani Catering" />
        </div>
        <img
          src={assets.briys2}
          alt="Catering Setup"
          className="service-shutter-image-1"
        />
        {/* Optionally, include additional images as needed */}
        {/* <img src={assets.briys3} alt="Additional Catering Visual" className="service-shutter-image-2" /> */}
      </div>
    </section>
  );
}

export default Welcome;