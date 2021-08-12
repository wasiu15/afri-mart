import React, { Fragment } from "react";
import "./cart-style.css";

const Cart = () => {
  return (
    <Fragment>
      <div className="cart-header">
        <button className="close-cart">X</button>
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
                <li>Ruffle Strap Pinal</li>
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
                <li>Ruffle Strap Pinal</li>
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
                <li>Ruffle Strap Pinal</li>
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
          <button>View Cart</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
