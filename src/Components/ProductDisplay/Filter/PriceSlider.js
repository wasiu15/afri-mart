import React from "react";
import "./price-slider-style.css";

const PriceSlider = () => {
  return (
    <div>
      <div className="price-range-slider">
        <div id="slider-range" className="range-bar">
          <p className="range-value">
            <input type="text" id="amount" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
