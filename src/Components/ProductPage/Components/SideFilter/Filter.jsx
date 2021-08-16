import React from "react";
import Categories from "./Categories/Categories";
import "./filter-style.css";
import PriceSlider from "./PriceSlider/PriceSlider";
import { useState } from "react";

const Filter = () => {
  const [quantity, setQuantity] = useState([1, 50]);
  const updateRange = (data) => {
    console.log(data);
    setRange(data);
  };
  function setRange(data) {
    var firstPrice = setActualPrice(data[0]),
      secondPrice = setActualPrice(data[1]);
    setQuantity([firstPrice, secondPrice]);
  }

  function setActualPrice(input) {
    if (input < 5) {
      return 1;
    } else {
      if (input % 5 == 0) {
        return input;
      } else {
        input = input - 1;
        if (input % 5 == 0) {
          return input;
        } else {
          input = input - 1;
          if (input % 5 == 0) {
            return input;
          } else {
            input = input - 1;
            if (input % 5 == 0) {
              return input;
            } else {
              input = input - 1;
              return input;
            }
          }
        }
      }
    }
  }

  // STARTS INPUT BEGINS
  const startValueHandler = (value) => {
    setQuantity([value, quantity[1]]);
  };
  const stopValueHandler = (value) => {
    setQuantity([quantity[0], value]);
  };

  return (
    <div className="filter-container">
      <div className="filter-inner" id="sidebar-wrapper">
        <div className="list-group">
          <label className="checklist-header">Collection</label>
          <div className="collection item-group" id="checklist">
            <input
              id="01"
              type="checkbox"
              name="r"
              value="1"
              defaultChecked="checked"
            />
            <label htmlFor="01">Bannana</label>
            <input id="02" type="checkbox" name="r" value="2" />
            <label htmlFor="02">Tomatoes</label>
            <input id="03" type="checkbox" name="r" value="3" />
            <label htmlFor="03">Vegetables</label>
          </div>
          <label className="checklist-header">Price Range</label>
          <div className="item-group reduce-margin-bottom">
            <br />
            <div id="slider-range">
              <PriceSlider
                quantity={quantity}
                updateRange={updateRange}
                startValueHandler={startValueHandler}
                stopValueHandler={stopValueHandler}
              />
            </div>
          </div>{" "}
          <br />
          <label>All Categories</label>
          <div className="item-group">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
