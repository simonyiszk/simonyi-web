import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="servicesSectionContainer">
      <h1 className="servicesSectionTitle">Szolgáltatások</h1>
      <div className="servicesWrapper">
        <a
          href="https://termek.sch.bme.hu/teremfoglalo.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="servicesBox"
            style={{ backgroundImage: "url(/resources/room.jpg)" }}
          >
            <div className="serviceBoxTitle">Teremigénylés</div>
          </div>
        </a>
        <a
          href="https://termek.sch.bme.hu/eszkozfoglalo.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="servicesBox"
            style={{ backgroundImage: "url(/resources/proj.jpg)" }}
          >
            <div className="serviceBoxTitle">Eszközigénylés</div>
          </div>
        </a>
      </div>
    </div>
  );
}
