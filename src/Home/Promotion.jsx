import React from "react";
import "./Promotion.css";
import { assets } from "../assets/assests";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-section-content">
        {/* LEFT SIDE (TEXT) */}
        <div className="promo-text-container">
          <span className="promo-discount">SAVE 20%</span>
          <h1 className="promo-title">
            ORDER YOUR <span className="promo-highlight">ZAHOOR BIRYANI</span> FOR FUNCTIONS
          </h1>
          <p className="promo-subtitle">
            We cater for weddings, corporate events, birthdays and more.{" "}
          
          </p>
          <p className="promo-description">
            With decades of expertise and authentic recipes, Zahoor Biryani delivers a culinary experience that makes your event unforgettable. Our passion for quality ensures every dish is crafted to perfection.
          </p>
          <button className="promo-cta-btn">BOOK NOW</button>
        </div>

        {/* RIGHT SIDE (IMAGES) */}
        <div className="promo-images-container">
          <img
            src={assets.grilled}
            alt="Biryani Dish"
            className="promo-biryani-img"
          />
          {/* <p className="promo-taste-text">Experience the Royal Flavors</p> */}
        </div>
      </div>

      {/* Decorative absolute images */}
      <img
        src={assets.spicy}
        alt="Decorative Top"
        className="promo-top-img"
      />
      <img
        src={assets.tomato}
        alt="Decorative Bottom"
        className="promo-bottom-img"
      />
    </section>
  );
}

export default PromoSection;
