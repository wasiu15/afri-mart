import React from "react";
import Cart from "./Components/SideCart/Cart";
import MenuBar from "./Components/ProductHeader/MenuBar";
import Header from "./Components/ProductHeader/Header";
import Filter from "./Components/SideFilter/Filter";
import ProductsDisplay from "./Components/Products/Products";
import "./style.css";

const Products = ({ products }) => {
  return (
    <div className="Products">
      <Header />
      <div className="productContainer">
        <div id="wrap" className="wrapper">
          <div className="filter-sidebar">
            <Filter />
          </div>
          <div className="app">
            <main className="main">
              <div className="site-section">
                {/* <!-- header section ends --> */}
                <section className="product" id="product">
                  <div>
                    <MenuBar />
                  </div>
                  <div className="product-list">
                    <div id="heading-mobile">
                      <h1 className="heading prod-heading">
                        latest <span>products</span>
                      </h1>
                    </div>
                    <ProductsDisplay products={products} />
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
    </div>
  );
};

export default Products;
