import React from "react";
import CartItem from "../CartItem/CartItem";
import ChooseItem from "../ChooseItem/ChooseItem";

const Cart = ({ cart, resetCart, chooseItem, choosenItem }) => {
  return (
    <div>
      <button
        className="btn btn-primary cart-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Cart <span className="badge badge-primary">{cart.length}</span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.map((item) => (
            <CartItem item={item} key={item["_id"]}></CartItem>
          ))}
          <button className="btn btn-info" onClick={chooseItem}>
            Choose 1 For me
          </button>{" "}
          <br />
          <br />
          <button className="btn btn-warning" onClick={resetCart}>
            Reset
          </button>
          <div className="choosen-items">
            {<ChooseItem item={choosenItem}></ChooseItem>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
