import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = ({ cart, resetCart, chooseItem, choosenItem }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="siteName">
          <NavLink to="/" className={"navbar-brand"}>
            <span className="primary-text">Natural</span> Shop
          </NavLink>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      <Cart
        cart={cart}
        resetCart={resetCart}
        chooseItem={chooseItem}
        choosenItem={choosenItem}
      ></Cart>
    </div>
  );
};

export default Header;
