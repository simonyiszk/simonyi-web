import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerSectionContainer">
      <div className="footer__container">
        <div className="footerLogo__container">
          <a href="https://svie.hu/" target="_blank" rel="noopener noreferrer">
            <img src={`./resources/footer/sch_small.svg`} alt="Schönherz" />
          </a>
        </div>
        <div className="footerLogo__container">
          <a href="https://simonyi.bme.hu/" target="_blank" rel="noopener noreferrer">
            <img src={`./resources/footer/simonyi.svg`} alt="Simonyi" />
          </a>
        </div>
        <div className="footerLogo__container">
          <a href="http://www.vik.bme.hu/" target="_blank" rel="noopener noreferrer">
            <img src={`./resources/footer/vik.svg`} alt="BME-VIK" />
          </a>
        </div>
      </div>
    </div>
  );
}
