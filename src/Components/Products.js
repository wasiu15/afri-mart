import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="box-container">
      {products.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default Products;
