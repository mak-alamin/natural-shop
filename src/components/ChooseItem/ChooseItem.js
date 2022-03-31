import React from "react";

const ChooseItem = ({ item }) => {
  const { name, picture } = item;
  console.log(item);
  if (Object.keys(item).length > 0 || item.length > 0) {
    return (
      <div className="mt-5">
        <h3>Choosen for you</h3>
        <div className="cartItem">
          <img src={picture} alt="" width="60" />
          <strong className="ms-3">{name}</strong>
        </div>
      </div>
    );
  }

  return <></>;
};

export default ChooseItem;
