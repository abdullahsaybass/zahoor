import React from "react";
import "./Catering.css";
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

function ZahoorCatering() {
  return (
    <section className="zahoor-catering-section">
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
      </div>
    </section>
  );
}

export default ZahoorCatering;