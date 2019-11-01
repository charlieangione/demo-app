import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import AcceloOnboarding from './components/AcceloOnboarding';
import YotpoOnboarding from './components/YotpoOnboarding';
import MaybeTechOnboarding from './components/MaybeTechOnboarding';
// import Player from './components/Player';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">See how other companies are using Appcues!</h3>
      </Col>
    </Row>
    <Row>
      <Col md={6}><ExampleCard /></Col>
      <Col md={6}><ExampleCard /></Col>
    </Row>
    <Row>
      <Col md={6}><AcceloOnboarding /></Col>
      <Col md={6}><MaybeTechOnboarding /></Col>
    </Row>
    <Row>
      <Col md={6}><YotpoOnboarding /></Col>
      <Col md={6}><ExampleCard /></Col>
    </Row>
  </Container>
);

export default ExamplePage;
