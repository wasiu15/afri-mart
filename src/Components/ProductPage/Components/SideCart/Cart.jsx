import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./cart-style.css";

const Cart = () => {
  return (
    <div className="class-outer-body">
      <div className="cart-header">
        <span className="fa fa-times close-cart-btn" onClick={closeCart}></span>
        <strong>
          <label>Your Bag</label>
        </strong>
      </div>
      <div className="cartProducts">
        <ul>
          <li className="cart-prod">
            <div className="cart-prod-img">
              <img height="70px" width="100px" src="./images/category-2.png" />
            </div>
            <div className="cart-prod-details">
              <ul>
                <li className="cart-prod-name">Ruffle Strap Pinal</li>
                <strong>
                  <li className="cart-prod-price">$45.00</li>
                </strong>
              </ul>
              <button>Remove</button>
            </div>
          </li>
          <li className="cart-prod">
            <div className="cart-prod-img">
              <img height="70px" width="100px" src="./images/category-2.png" />
            </div>
            <div className="cart-prod-details">
              <ul>
                <li className="cart-prod-name">Ruffle Strap Pinal</li>
                <strong>
                  <li className="cart-prod-price">$45.00</li>
                </strong>
              </ul>
              <button>Remove</button>
            </div>
          </li>
          <li className="cart-prod">
            <div className="cart-prod-img">
              <img height="70px" width="100px" src="./images/category-2.png" />
            </div>
            <div className="cart-prod-details">
              <ul>
                <li className="cart-prod-name">Ruffle Strap Pinal</li>
                <strong>
                  <li className="cart-prod-price">$45.00</li>
                </strong>
              </ul>
              <button>Remove</button>
            </div>
          </li>
        </ul>
        <div className="cartProductFooter">
          <div>
            <p>Subtotal</p>
            <strong>
              <p className="cart-prod-price">$252.00</p>
            </strong>
          </div>
          <Link to="/cart" className="view-cart-btn">
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );

  function closeCart() {
    if (document.querySelector(".cart-sidebar").style.display == "block") {
      document.querySelector(".cart-sidebar").style.display = "none";
      document.querySelector("#wrap").style.gridTemplateColumns = "1fr";
    } else {
      document.querySelector(".cart-sidebar").style.display = "block";
      document.querySelector("#wrap").style.gridTemplateColumns = "3fr 1fr";
    }
  }
};

export default Cart;
