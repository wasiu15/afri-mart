import React from "react";
import "./price-slider-style.css";
import { Slider } from "@material-ui/core";
import Input from "./Input";

const PriceSlider = ({
  quantity,
  updateRange,
  startValueHandler,
  stopValueHandler,
}) => {
  return (
    <div className="price-range-container">
      <Input
        startValue={quantity[0]}
        stopValue={quantity[1]}
        startHandler={startValueHandler}
        stopHandler={stopValueHandler}
      />
      <div className="slider">
        <Slider value={quantity} onChange={(e, data) => updateRange(data)} />
      </div>
    </div>
  );
};
export default PriceSlider;
