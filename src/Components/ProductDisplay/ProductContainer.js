import React from "react";
import ProductCart from "./Cart/ProductCart";
import ProductFilter from "./Filter/ProductFilter";
import ProductList from "./ProductList";
import ProductHeader from "./ProductHeader";
import Filter from "./Filter/Filter";
import ProductNavbar from "./ProdNavbar/ProductNavbar";
import "./product-style.css";
import Products from "../Products";

const ProductContainer = ({ products }) => {
  return (
    <div className="productContainer">
      <div id="wrap" className="wrapper">
        <div className="sidebar">
          <Filter />
        </div>
        <div className="App">
          <main className="main">
            <div className="site-section">
              {/* <!-- header section ends --> */}
              <section className="product" id="product">
                <div>
                  <ProductNavbar />
                </div>
                <div className="product-list">
                  <Products products={products} />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
