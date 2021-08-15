import React from "react";
import "./price-slider-style.css";
import { Slider } from "@material-ui/core";
import { useState } from "react";
import Input from "./Input";

const PriceSlider = () => {
  const [val, setVal] = useState([30, 40]);
  const updateRange = (e, data) => {
    setVal(data);
  };
  return (
    <div className="price-range-container">
      <Input />
      <div className="slider">
        <Slider value={val} onChange={updateRange} />
      </div>
    </div>
  );
};
export default PriceSlider;
