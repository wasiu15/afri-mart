import React from "react";
import "./filter-style.css";
import PriceSlider from "./PriceSlider";

const Filter = () => {
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
            <label for="01">Bannana</label>
            <input id="02" type="checkbox" name="r" value="2" />
            <label for="02">Tomatoes</label>
            <input id="03" type="checkbox" name="r" value="3" />
            <label for="03">Vegetables</label>
          </div>
          <label className="checklist-header">Price Range</label>
          <div className="item-group">
            <div id="slider-range">
              <PriceSlider />
            </div>
          </div>{" "}
          <br />
          <label className="checklist-header">All Categories</label>
          <div className="item-group hov cartegories">
            <ul className="main">
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
              <li>Item4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
