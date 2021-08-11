import React from "react";
import "./product-nav-style.css";

const ProductNavbar = () => {
  return (
    <div className="header-2 prod-head">
      <button
        id="toggle-btn"
        onClick={hey}
        className="btn-toggle fas fa-bars"
      ></button>

      <h1 class="heading prod-heading" id="heading-windows">
        latest <span>products</span>
      </h1>

      <div className="icons">
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-user-circle"></a>
      </div>
    </div>
  );

  var openORclose = "openned";
  function hey() {
    console.log("HEy");
    if (openORclose == "openned") {
      document.querySelector(".sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
      openORclose = "closed";
    } else {
      document.querySelector(".sidebar").style.display = "block";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr 5fr";
      openORclose = "openned";
    }
  }
};

export default ProductNavbar;
