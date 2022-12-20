import React from "react";
import cardGroup from "../imgs/card-group.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <img src={cardGroup} alt="Collection of pictures showing people having different experiences"
        className="hero-img"
      />

      
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
     
    </section>
  );
}

export default Hero;
