import React from "react";

const ChooseItem = ({ item }) => {
  console.log(item);
  const { name, picture } = item;

  return (
    <div className="mt-5">
      <h3>Choosen for you</h3>
      <p>
        <img src={picture} alt="" width="60" />
        <strong className="ms-3">{name}</strong>
      </p>
    </div>
  );
};

export default ChooseItem;
