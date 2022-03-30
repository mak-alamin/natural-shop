import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosenItem, setChoosenItem] = useState([]);
  const [cartTarget, setCartTarget] = useState("#offcanvasRight");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
    // const exists = cart.find(
    //   (product) => product["_id"] === selectedProduct["_id"]
    // );

    let newCart = [...cart];
    newCart = [...cart, selectedProduct];
    setCart(newCart);
    setCartTarget("");
  };

  const randomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const chooseItem = () => {
    if (cart.length > 2) {
      setChoosenItem(randomItem(cart));
    } else {
      setChoosenItem(randomItem(products));
    }
  };

  const resetCart = () => {
    setCart([]);
    setChoosenItem([]);
  };

  return (
    <div>
      <h1 className="siteName">
        <span className="text-success">Natural</span> Shop
      </h1>

      <Cart
        cart={cart}
        resetCart={resetCart}
        chooseItem={chooseItem}
        choosenItem={choosenItem}
      ></Cart>

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
