import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1>This is home page</h1>
      <Row>
        <Col xs={{ order: 3 }}>Banana</Col>
        <Col xs>Apple</Col>
        <Col xs={{ order: 1 }}>Mango</Col>
      </Row>
    </Container>
  );
};

export default Home;
