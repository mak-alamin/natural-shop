import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

function App() {
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
      <Header
        cart={cart}
        resetCart={resetCart}
        chooseItem={chooseItem}
        choosenItem={choosenItem}
      ></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              handleAddToCart={handleAddToCart}
              cartTarget={cartTarget}
            ></Shop>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
