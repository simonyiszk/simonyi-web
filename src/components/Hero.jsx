import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero__background">
      <div className="hero__overlay">
        <div className="hero__imageContainer">
          <img src="./resources/simonyi_white.svg" alt="Simonyi" />
        </div>
        <div className="hero__mail"><a href="mailto:info@simonyi.bme.hu">info@simonyi.bme.hu</a></div>
      </div>
    </div>
  );
}
