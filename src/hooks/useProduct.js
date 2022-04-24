import { useEffect, useState } from "react";

const useProduct = (product_id) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        let foundProduct = data.find((pd) => pd["_id"] === product_id);

        setProduct(foundProduct);
      });
  }, [product_id]);

  return [product, setProduct];
};

export default useProduct;
