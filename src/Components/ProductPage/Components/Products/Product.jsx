import React, { Fragment } from "react";
import NumberSelector from "./Components/NumberSelector";

const Product = ({ product }) => {
  return <Fragment>{productBox(product)}</Fragment>;
};

function productBox(product) {
  return (
    <div className="box">
      <span className="discount">{product.productDiscount}</span>
      <div className="icons">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-share"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>
      <img src={product.productImage} />
      <h3>{product.productName}</h3>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
      <div className="price">
        {product.productCurrentPrice} <span> {product.productOldPrice} </span>
      </div>
      <div className="quantity">
        <span>quantity : </span>
        <NumberSelector />
        <span> /kg </span>
      </div>
      <a onClick={add} href="#" className="btn">
        add to cart
      </a>
    </div>
  );
}
function add() {
  console.log("Got here!");

  //call Product in there
}

export default Product;
