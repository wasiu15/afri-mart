import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "./ProductDisplay/ProductContainer";

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
        <input type="number" min="1" max="1000" value="1" />
        <span> /kg </span>
      </div>
      {/* <Link
        onClick={add}
        to="/Component/ProductDisplay/ProductContainer.js"
        className="btn"
      >
        add to
      </Link> */}
      {/* {(document.getElementById("root").innerHTML = <div></div>)} */}
      <a onClick={add} href="./product-page/index.html" className="btn">
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
