import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PriceOptionOne from './components/PriceOptionOne';
import PriceOptionTwo from './components/PriceOptionTwo';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Available Packages</h3>
      </Col>
    </Row>
    <Row>
      <Col><PriceOptionOne /></Col>
      <Col><PriceOptionTwo /></Col>
    </Row>
  </Container>
);

export default ExamplePage;
