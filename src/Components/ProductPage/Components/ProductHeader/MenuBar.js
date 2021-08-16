import React from "react";
import "./menu-bar-style.css";

const MenuBar = () => {
  var openORclose_filter = "openned";
  var openORclose_cart = "closed";
  return (
    <div>
      <div className="header-2 prod-head">
        <button
          id="toggle-btn"
          onClick={toggleFilter}
          className="btn-toggle fas fa-bars"
        ></button>

        <h1 className="heading prod-heading" id="heading-window">
          latest <span>products</span>
        </h1>

        <div className="icons">
          <a href="#" className="fas fa-shopping-cart" onClick={toggleCart}></a>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-user-circle"></a>
        </div>
      </div>
    </div>
  );
  function toggleFilter() {
    if (document.querySelector(".filter-sidebar").style.display == "block") {
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
    } else {
      document.querySelector(".filter-sidebar").style.display = "block";
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr 5fr";
    }
  }
  function toggleCart() {
    if (document.querySelector(".cart-sidebar").style.display == "block") {
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
    } else {
      document.querySelector(".cart-sidebar").style.display = "block";
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "3fr 1fr";
    }
  }
};

export default MenuBar;
