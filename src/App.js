import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Shop from "./components/Shop/Shop";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choosenItem, setChoosenItem] = useState([]);
  const [cartTarget, setCartTarget] = useState("#offcanvasRight");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
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

  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("/natural-shop-admin") ? (
        ""
      ) : (
        <Header
          cart={cart}
          resetCart={resetCart}
          chooseItem={chooseItem}
          choosenItem={choosenItem}
        ></Header>
      )}

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

        <Route
          path="shop/product/:product_id"
          element={
            <ProductDetails
              handleAddToCart={handleAddToCart}
              cartTarget={cartTarget}
            ></ProductDetails>
          }
        ></Route>

        <Route path="/natural-shop-admin" element={<Admin></Admin>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
