import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddToCart = ({ handleAddToCart, cartTarget, product }) => {
  return (
    <button
      className="btn btn-primary"
      data-bs-toggle="offcanvas"
      data-bs-target={cartTarget}
      aria-controls="offcanvasRight"
      onClick={() => handleAddToCart(product)}
    >
      Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
    </button>
  );
};

export default AddToCart;
