import React from "react";

const CartItem = ({ item }) => {
  const { name, picture } = item;
  return (
    <div className="cartItem">
      <img src={picture} alt="" width="60" />
      <strong className="ms-3">{name}</strong>
    </div>
  );
};

export default CartItem;
