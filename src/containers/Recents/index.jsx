import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import NonDisclosure from './components/NonDisclosure';

const Recents = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Recents</h3>
      </Col>
    </Row>
    <Row>
      <Col md={4}><ExampleCard /></Col>
      <Col md={4}><NonDisclosure /></Col>
    </Row>
  </Container>
);

export default Recents;
