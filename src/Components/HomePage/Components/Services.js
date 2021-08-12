import React from "react";
import Delivery from "./ServiceContents/Delivery";
import ExcellentFood from "./ServiceContents/ExcellentFood";
import FastFood from "./ServiceContents/FastFood";

const Services = () => {
  return (
    <div>
      {/* <!--========== SERVICES ==========--> */}
      <section className="services section bd-container" id="services">
        <span className="section-subtitle">Offering</span>
        <h2 className="section-title">Our amazing services</h2>
        <div className="services__container  bd-grid">
          <ExcellentFood />
          <FastFood />
          <Delivery />
        </div>
        <div className="services__container  bd-grid"></div>
      </section>
    </div>
  );
};

export default Services;
