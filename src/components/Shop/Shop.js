import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import QA from "../QA/QA";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosenItem, setChoosenItem] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
    if (cart.length === 4) {
      alert(`Sorry, you can't add more than 4 items.`);
      return;
    }
    const exists = cart.find(
      (product) => product["_id"] === selectedProduct["_id"]
    );

    if (exists) {
      alert(`This item is already added.`);
      return;
    } else {
      let newCart = [...cart];
      newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
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
        <span className="text-success">Greenly</span> Plant Shop
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
          ></Product>
        ))}
      </div>

      <div className="row my-5">
        <QA></QA>
      </div>
    </div>
  );
};

export default Shop;
