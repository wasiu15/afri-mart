import React from "react";

const CartPage = () => {
  return (
    <div>
      <div className="cart-head">
        <h1 className="cart-title">Shopping cart</h1>
      </div>
      <div className="cart-page-container">
        <div className="cart-section">
          <h2 className="cart-items-title">Cart (2 items)</h2>
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-img-div">
                <img
                  height="100px"
                  width="100px"
                  src="./images/category-1.png"
                />
              </div>
              <ul>
                <h3 className="checkout-total-head">Water Leaf</h3>
                <li>CATEGORY: VEGETABLE</li>
                <li className="float-down">
                  <ul className="del-and-love-ul">
                    <li>
                      <span>DEL</span>REMOVE ITEM
                    </li>
                    <li>
                      <span>LOVE</span>MOVE TO WISH LIST
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="cart-item-quantity">
                <div className="cart-increment-group">
                  <div className="div-of-plus">-</div>
                  <div>1</div>
                  <div className="div-of-minus">+</div>
                </div>
                <br />
                <p className="note-1-piece">(Note, 1 piece)</p>
                <p className="cart-item-price">$17.99</p>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-img-div">
                <img
                  height="100px"
                  width="100px"
                  src="./images/category-2.png"
                />
              </div>
              <ul>
                <h3 className="checkout-total-head">Water Leaf</h3>
                <li>CATEGORY: VEGETABLE</li>
                <li className="float-down">
                  <ul className="del-and-love-ul">
                    <li>
                      <span>DEL</span>REMOVE ITEM
                    </li>
                    <li>
                      <span>LOVE</span>MOVE TO WISH LIST
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="cart-item-quantity">
                <div className="cart-increment-group">
                  <div className="div-of-plus">-</div>
                  <div>1</div>
                  <div className="div-of-minus">+</div>
                </div>
                <br />
                <p className="note-1-piece">(Note, 1 piece)</p>
                <p className="cart-item-price">$17.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-section">
          <div className="checkout-first-div">
            <h3 className="checkout-total-head">The total amount of</h3>
            <div className="checkout-body">
              <label>Temporary amount</label>
              <label className="checkout-left">$53.00</label>

              <label>Shipping</label>
              <label className="checkout-left">Gratis</label>

              <strong>
                <label>
                  The total amount of <br /> (including VAT)
                </label>
              </strong>
              <strong className="checkout-left">
                <label>$54.98</label>
              </strong>
            </div>
            <button>GO TO CHECKOUT</button>
          </div>
          <div className="checkout-second-div">
            <label className="discount-dropdown">
              Add a discount code (optional)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
