import React from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

const Product = ({ product, handleAddToCart, cartTarget }) => {
  const { _id, name, price, picture } = product;

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={picture} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            <NavLink to={`product/${_id}`}>{name}</NavLink>
          </h5>
          <p className="card-text">Price: {price}</p>

          <AddToCart
            handleAddToCart={handleAddToCart}
            cartTarget={cartTarget}
            product={product}
          ></AddToCart>
        </div>
      </div>
    </div>
  );
};

export default Product;
