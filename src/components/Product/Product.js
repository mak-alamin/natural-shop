import React from "react";

const Product = (product) => {
  console.log(product);
  const { name, price, picture } = product.product;
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
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
