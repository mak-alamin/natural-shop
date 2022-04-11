import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

const ProductDetails = ({ handleAddToCart, cartTarget }) => {
  let { product_id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000//data.json`)
      .then((res) => res.json())
      .then((data) => {
        let foundProduct = data.find((pd) => pd["_id"] === product_id);

        setProduct(foundProduct);
      });
  }, [product_id]);

  const { name, picture, price } = product;

  return (
    <>
      <Container>
        <h1>Product Details</h1>

        <Row>
          <Col md={6}>
            {" "}
            <img
              src={`http://localhost:3000/${picture}`}
              alt={name}
              className="img-fluid"
            />
          </Col>

          <Col md={6}>
            <h2>Product Name : {name}</h2>
            <h2>Product Price : {price}</h2>

            <AddToCart
              handleAddToCart={handleAddToCart}
              cartTarget={cartTarget}
              product={product}
            ></AddToCart>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
