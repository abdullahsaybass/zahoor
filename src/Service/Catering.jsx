import React from "react";
import "./Catering.css";
<<<<<<< HEAD
// Replace this with your own image import or path
// Example: import biryaniImage from "../../assets/biryani.png";
=======
import { assets } from "../assets/assests";

const services = [
  {
    title: "WEDDING CATERING",
    description:
      "Make your special day unforgettable with our premium biryani catering, serving authentic flavors with the perfect blend of spices. From traditional delicacies to exquisite desserts, we ensure a grand feast for you and your guests. Our experienced chefs and staff will work closely with you to create a customized menu that reflects your unique tastes and preferences, ensuring a memorable dining experience for everyone.",
    image: assets.wedding
  },
  {
    title: "BIRTHDAY PARTY CATERING",
    description:
      "Celebrate with our mouthwatering biryani, ensuring a joyful and delicious experience for you and your guests. We offer a variety of dishes, from appetizers to desserts, making your birthday celebration truly special. Our team will handle all the details, from setup to cleanup, so you can relax and enjoy your special day with friends and family.",
    image: assets.birthday,
  },
  {
    title: "HOUSEWARMING CATERING",
    description:
      "Welcome your loved ones with our signature biryani, prepared with the finest ingredients and rich flavors. Our catering service offers a well-curated menu that suits both traditional and contemporary tastes. We provide a seamless and stress-free catering experience, allowing you to focus on celebrating your new home with your guests.",
    image: assets.housewarming,
  },
  {
    title: "CORPORATE CATERING",
    description:
      "Enhance your business events with our professionally curated catering, offering a feast of authentic biryani and more. We ensure a seamless dining experience with prompt service, making your corporate meetings and events hassle-free. Our team is dedicated to providing high-quality food and exceptional service, ensuring your event is a success.",
    image: assets.corporate,
  },
  {
    title: "FESTIVAL CATERING",
    description:
      "Make your festive celebrations even more special with our grand selection of flavorful biryanis and traditional dishes. From Diwali to Eid, our catering ensures a rich spread of delicacies that complement your festive joy. Our team will work with you to create a menu that reflects the spirit of the occasion, ensuring a memorable dining experience for all.",
    image: assets.festivel,
  },
  {
    title: "ENGAGEMENT CATERING",
    description:
      "Treat your guests to an exceptional dining experience with our expertly prepared biryani and side dishes. Our menu is customized to match your preferences, ensuring a memorable culinary delight for your engagement ceremony. We provide a seamless and stress-free catering experience, allowing you to focus on celebrating your special day with your loved ones.",
    image: assets.engagement,
  },
  {
    title: "CUSTOM EVENT CATERING",
    description:
      "No matter the occasion, we provide customized catering solutions tailored to your unique event needs. Our team works closely with you to design a menu that suits your taste and ensures a delightful dining experience. From intimate gatherings to large-scale events, we are committed to providing high-quality food and exceptional service.",
    image: assets.custom,
  },
];
>>>>>>> 9825442 (add zahoor master)

function ZahoorCatering() {
  return (
    <section className="zahoor-catering-section">
<<<<<<< HEAD
      <div className="zahoor-catering-container">
        {/* LEFT: Biryani Image + Price + Since Badge */}
        <div className="zahoor-catering-image-wrapper">
          {/* Replace the src with your actual biryani image path */}
          <img
            src="https://via.placeholder.com/400x400.png?text=Biryani+Image"
            alt="Zahoor Biryani"
            className="zahoor-catering-image"
          />
          <div className="price-badge">$299</div>
          <div className="since-badge">SINCE / 1985</div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="zahoor-catering-content">
          <h4 className="zahoor-catering-subtitle">ABOUT OUR FOOD</h4>
          <h2 className="zahoor-catering-title">
            WHERE QUALITY MEETS <span>EXCELLENT</span> SERVICE
          </h2>
          <p className="zahoor-catering-description">
            Enjoy the finest blend of aromatic spices and premium ingredients 
            in every bite of our signature Biryani. We offer catering services 
            for events of all sizes and take orders for individuals, families, 
            and corporate gatherings. Let us make your next meal or event truly 
            unforgettable!
          </p>

          {/* Key Points */}
          <div className="zahoor-catering-points">
            <div className="point-item">
              <h3>SUPER QUALITY FOOD</h3>
              <p>
                Our expert chefs use time-tested recipes to ensure that each dish 
                is a masterpiece of taste and tradition.
              </p>
            </div>
            <div className="point-item">
              <h3>WELL REPUTATION</h3>
              <p>
                Decades of experience and countless satisfied customers stand as 
                a testament to our commitment to excellence.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="zahoor-catering-btn">Place Your Order</button>
        </div>
=======
      <div className="catering-types">
      <h1 className="welcome-text">Welcome to Zahoor Catering</h1>
      <div className="zahoor-catering-container">
        {services.map((service, index) => (
          <div key={index} className="zahoor-catering-box">
            <img src={service.image} alt={service.title} className="catering-image" />
            <h2 className="catering-title">{service.title}</h2>
            <p className="catering-description">{service.description}</p>
          </div>
        ))}
      </div>
>>>>>>> 9825442 (add zahoor master)
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default ZahoorCatering;
=======
export default ZahoorCatering;
>>>>>>> 9825442 (add zahoor master)
