import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Menu.css";
import { assets } from "../assets/assests";

function FoodMenu() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeCategory, setActiveCategory] = useState("biryani");

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // on mobile, typically 1 slide is best
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // All categories you want to show as tabs/buttons
  const categories = [
    { label: "Biryani", value: "biryani" },
    { label: "Thanthoori", value: "thanthoori" },
    { label: "Barbeque", value: "barbeque" },
    { label: "Tikka", value: "tikka" },
    { label: "Shawarma", value: "shawarma" },
    { label: "Chicken", value: "chicken" },
    { label: "Fried Rice", value: "friedrice" },
    { label: "Noodles", value: "noodles" },
  ];

  // Menu items now include a `category` field
  const menuItems = [
    {
      id: 1,
      title: "Grill Chicken",
      category: "chicken",
      prices: ["Full: Rs. 450", "Half: Rs. 225"],
    },
    {
      id: 2,
      title: "Tandoori Chicken",
      category: "thanthoori",
      prices: ["Full: Rs. 450", "Half: Rs. 225"],
    },
    {
      id: 3,
      title: "Barbeque",
      category: "barbeque",
      prices: ["Full: Rs. 490", "Half: Rs. 245"],
    },
    {
      id: 4,
      title: "Chicken Tikka",
      category: "tikka",
      prices: ["Full: Rs. 290", "Half: Rs. 165"],
    },
    {
      id: 5,
      title: "Hariyali Tikka",
      category: "tikka",
      prices: ["Full: Rs. 325", "Half: Rs. 185"],
    },
    {
      id: 6,
      title: "Reshmi Tikka",
      category: "tikka",
      prices: ["Full: Rs. 325", "Half: Rs. 185"],
    },
    {
      id: 7,
      title: "Shawarma",
      category: "shawarma",
      prices: ["Regular: Rs. 95", "Special: Rs. 135"],
    },
    {
      id: 8,
      title: "Bun Shawarma",
      category: "shawarma",
      prices: ["Rs. 115"],
    },
    {
      id: 9,
      title: "Chicken 65",
      category: "chicken",
      prices: ["100 gm: Rs. 95", "250 gm: Rs. 170"],
    },
    {
      id: 10,
      title: "Mutton Biriyani",
      category: "biryani",
      prices: ["Full (2 Can Eat): Rs. 430", "Half: Rs. 260"],
    },
    {
      id: 11,
      title: "Chicken Biriyani",
      category: "biryani",
      prices: ["Full (2 Can Eat): Rs. 280", "Half: Rs. 155", "¾: Rs. 195"],
    },
    {
      id: 12,
      title: "Kuska",
      category: "biryani",
      prices: ["1 kg: Rs. 185", "½ kg: Rs. 115"],
    },
    {
      id: 13,
      title: "Fried Rice",
      category: "friedrice",
      prices: [
        "Chicken: Rs. 155",
        "Veg: Rs. 115",
        "Egg: Rs. 130",
        "Chicken Schezwan: Rs. 175",
      ],
    },
    {
      id: 14,
      title: "Noodles",
      category: "noodles",
      prices: [
        "Chicken: Rs. 160",
        "Veg: Rs. 115",
        "Egg: Rs. 135",
        "Chicken Schezwan: Rs. 180",
      ],
    },
    {
      id: 15,
      title: "Other Dishes",
      // If you want to display these under a certain category, change "other" to that category
      category: "other",
      prices: [
        "Chilli Chicken (Dry): Rs. 185",
        "Chilli Chicken (Gravy): Rs. 199",
        "Chicken Manchurian: Rs. 199",
      ],
    },
  ];

  // Filter the menu items to show only the active category
  const filteredMenuItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // We flatten each item's prices so each card has 1 price,
  // or you can display multiple prices on a single card. 
  // If you want each price as a separate card, you can do this flattening:
  const flatSliderItems = [];
  filteredMenuItems.forEach((item) => {
    item.prices.forEach((priceOption, index) => {
      flatSliderItems.push({
        id: `${item.id}-${index}`,
        title: item.title,
        price: priceOption,
        img: assets.chicken, // or cycle images if you want
      });
    });
  });

  // Common header JSX
  const header = (
    <div className="biryani-header">
      <div>
        <h3 className="biryani-slogan">SAVOR THE AUTHENTIC TASTE</h3>
        <h2 className="biryani-title">FEATURED MENU</h2>
      </div>
    </div>
  );

  return (
    <div className="biryani-section">
      <div className="biryani-wrapper">
        {/* Category Buttons */}
        <div className="category-buttons" style={{ marginBottom: "30px" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={
                activeCategory === cat.value ? "active-category" : "inactive-category"
              }
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {header}

        {/* If mobile, show in slider. If desktop, show in grid */}
        {isMobile ? (
          <Slider ref={sliderRef} {...settings}>
            {flatSliderItems.map((item) => (
              <div key={item.id} className="biryani-slide">
                <div className="biryani-card">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="biryani-main-img"
                  />
                  <div className="biryani-border"></div>
                  <h3 className="biryani-card-title">{item.title}</h3>
                  <p className="biryani-card-price">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="biryani-grid">
            {flatSliderItems.map((item) => (
              <div key={item.id} className="biryani-card grid-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="biryani-main-img"
                />
                <div className="biryani-border"></div>
                <h3 className="biryani-card-title">{item.title}</h3>
                <p className="biryani-card-price">{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodMenu;
