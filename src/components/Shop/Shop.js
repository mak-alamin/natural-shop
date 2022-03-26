import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Plant Shop: {products.length}</h1>

      <Cart></Cart>

      <div className="row my-3">
        {products.map((product) => (
          <Product product={product} key={product["_id"]}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
