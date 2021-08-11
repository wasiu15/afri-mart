import React from "react";
import ProductFilter from "./Filter/ProductFilter";
import ProductList from "./ProductList";
import ProductHeader from "./ProductHeader";
import Filter from "./Filter/Filter";
import ProductNavbar from "./ProdNavbar/ProductNavbar";
import "./product-style.css";
import Products from "../Products";
import Cart from "./Cart/Cart";

const ProductContainer = ({ products }) => {
  return (
    <div className="productContainer">
      <div id="wrap" className="wrapper">
        <div className="filter-sidebar">
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
                  <div id="heading-mobile">
                    <h1 className="heading prod-heading">
                      latest <span>products</span>
                    </h1>
                  </div>
                  <Products products={products} />
                </div>
              </section>
            </div>
          </main>
        </div>
        <div className="cart-sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
