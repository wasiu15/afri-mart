import React from "react";
import Header from "../ProductHeader/Header";

const CartPage = () => {
  return (
    <div>
      <div className="cart-head">
        <h1 className="heading prod-heading cart-title" id="heading-window">
          Shopping <span>cart</span>
        </h1>
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
                <li>
                  <strong>CATEGORY:</strong> VEGETABLE
                </li>
                <li className="float-down">
                  <ul className="del-and-love-ul">
                    <li>
                      <span className="fa fa-trash"></span>REMOVE ITEM
                    </li>
                    <li>
                      <span className="fa fa-heart move-wish-right"></span>MOVE
                      TO WISH LIST
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="cart-item-quantity">
                <div className="cart-increment-group">
                  <div className="div-of-plus">-</div>
                  <div className="div-of-counter">1</div>
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
                <li>
                  <strong>CATEGORY:</strong> VEGETABLE
                </li>
                <li className="float-down">
                  <ul className="del-and-love-ul">
                    <li>
                      <span className="fa fa-trash"></span>REMOVE ITEM
                    </li>
                    <li>
                      <span className="fa fa-heart move-wish-right"></span>MOVE
                      TO WISH LIST
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
            <label className="discount-dropdown" onClick={discountDropdown}>
              Add a discount code (optional)
              <span class="fas fa-caret-down"></span>
            </label>
            <div className="discount-dropdown change-to-grid">
              <input type="text" placeholder="CUW2021" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function discountDropdown() {
    if (document.querySelector(".change-to-grid").style.display == "grid") {
      document.querySelector(".change-to-grid").style.display = "none";
    } else {
      document.querySelector(".change-to-grid").style.display = "grid";
    }
  }
};

export default CartPage;
