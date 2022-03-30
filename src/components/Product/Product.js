import React from "react";

const Product = ({ product, handleAddToCart, cartTarget }) => {
  const { name, price, picture } = product;

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={picture} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <button
            className="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target={cartTarget}
            aria-controls="offcanvasRight"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
