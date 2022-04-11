import { useEffect, useState } from "react";

const useProduct = (product_id) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let foundProduct = data.find((pd) => pd["_id"] === product_id);

        setProduct(foundProduct);
      });
  }, [product_id]);

  return [product, setProduct];
};

export default useProduct;
