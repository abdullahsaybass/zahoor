import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Fooditem.css";
import { assets } from "../assets/assests";

function BiryaniItems() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300, // faster transition than before
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // faster autoplay
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const biryaniItems = [
    {
      id: 1,
      img: assets.chicken1,
      title: "CHICKEN BIRYANI",
      subtitle: "Aromatic & Spicy",
    },
    {
      id: 2,
      img:assets.chicken,
      title: "MUTTON BRIYANI",
      subtitle: "Flavorful & Colorful",
    },
    {
      id: 3,
      img: assets.thanthoori,
      title: "THANTHOORI",
      subtitle: "Rich & Tender",
    },
    {
      id: 4,
      img: assets.grilled,
      title: "GRILLED CHICKEN",
      subtitle: "Light & Delicious",
    },
    {
      id: 5,
      img: assets.Fired,
      title: "VEG FIRED RICE",
      subtitle: "Chef's Signature",
    },
  ];

  return (
    <div className="biryani-section">
      <div className="biryani-wrapper">
        <div className="biryani-header">
          <div>
            <h3 className="biryani-slogan">SAVOR THE AUTHENTIC TASTE</h3>
            <h2 className="biryani-title">FEATURED BIRYANI DELIGHTS</h2>
          </div>
          {/*
          <div className="biryani-arrows">
            <span className="biryani-arrow left" onClick={previousSlide}>
              &lt;
            </span>
            <span className="biryani-arrow right" onClick={nextSlide}>
              &gt;
            </span>
          </div>
          */}
        </div>
        <Slider ref={sliderRef} {...settings}>
          {biryaniItems.map((item) => (
            <div key={item.id} className="biryani-slide">
              <div className="biryani-card">
                {/* Main image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="biryani-main-img"
                />

                {/* Decorative images */}
                <img src={assets.leaf} alt="Leaf" className="biryani-leaf" />
                <img
                  src={assets.burgershape}
                  alt="Burger Shape"
                  className="biryani-burger"
                />
                <img src={assets.leaf2} alt="Leaf" className="biryani-leaf2" />

                {/* Border element between image and text */}
                <div className="biryani-border"></div>

                {/* Card text */}
                <h3 className="biryani-card-title">{item.title}</h3>
                <p className="biryani-card-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BiryaniItems;
