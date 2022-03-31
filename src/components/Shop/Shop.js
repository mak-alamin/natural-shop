import React from "react";
import Product from "../Product/Product";

const Shop = ({ products, handleAddToCart, cartTarget }) => {
  return (
    <div className="container">
      <div className="row my-3 g-3">
        {products.map((product) => (
          <Product
            product={product}
            key={product["_id"]}
            handleAddToCart={handleAddToCart}
            cartTarget={cartTarget}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
