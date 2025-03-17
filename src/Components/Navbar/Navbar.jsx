import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaSearch, FaUser, FaHeart, FaBell, FaTruck } from "react-icons/fa";
import { assets } from "../../assets/assests";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="highlight">100% /</span> Secure delivery without contacting the courier
        </div>
        <div className="top-bar-right">
          <div className="track-order">
            <FaTruck className="icon-truck" />
            <span>Track Your Order</span>
          </div>
          <div className="top-icons">
            <div className="search">
              <FaSearch />
              <span>Search</span>
            </div>
            <FaUser />
            <FaHeart />
            <FaBell />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-section">
            <img src={assets.logo} alt="Foodking Logo" className="logo-img" />
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/">HOME PAGE</Link>
            </li>
            <li>
              <Link to="/service">
                SERVICE <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/our-menu">
                OUR MENU <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/outlet">
                OUTLET <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                CONTACT US <span className="arrow"></span>
              </Link>
            </li>
          </ul>

          {/* Right Side: Contact button and Hamburger */}
          <div className="nav-actions">
            <div className="cart-icon"></div>
            <button className="contact-btn">CONTACT US</button>
            <div className="hamburger" onClick={toggleMenu}>
              <FaBars className="hamburger-icon" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;