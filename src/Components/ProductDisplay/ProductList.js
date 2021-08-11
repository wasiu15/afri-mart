import React from "react";
import Header from "../Header";
import Products from "../Products";
import ProductHeader from "./ProductHeader";

const ProductList = ({ products }) => {
  return (
    <div>
      <main>
        <div className="site-section">
          {/* <!-- header section ends --> */}

          {/* <productListHeader */}
          {/* left and right */}
          {/* <!-- product section starts  --> */}
          <Products products={products} />
        </div>
      </main>
    </div>
  );
};

export default ProductList;
