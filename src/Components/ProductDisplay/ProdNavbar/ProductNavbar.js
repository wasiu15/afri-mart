import React from "react";
import "./product-nav-style.css";

const ProductNavbar = () => {
  var openORclose_filter = "openned";
  var openORclose_cart = "closed";
  return (
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
  );

  function toggleFilter() {
    if (openORclose_filter == "openned") {
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
      openORclose_filter = "closed";
      openORclose_cart = "closed";
    } else {
      document.querySelector(".filter-sidebar").style.display = "block";
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr 5fr";
      openORclose_filter = "openned";
      openORclose_cart = "closed";
    }
  }
  function toggleCart() {
    if (openORclose_cart == "openned") {
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
      openORclose_cart = "closed";
      openORclose_filter = "closed";
    } else {
      document.querySelector(".cart-sidebar").style.display = "block";
      document.querySelector(".filter-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "3fr 1fr";
      openORclose_cart = "openned";
      openORclose_filter = "closed";
    }
  }
};

export default ProductNavbar;
