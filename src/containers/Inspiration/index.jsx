import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import ExampleCard from './components/ExampleCard';
// import AcceloOnboarding from './components/AcceloOnboarding';
import YotpoOnboarding from './components/YotpoOnboarding';
import MaybeTechOnboarding from './components/MaybeTechOnboarding';
// import VideoPlayer from './components/VideoPlayer';
import Toast from './components/Toast';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">See how other companies are using Appcues!</h3>
      </Col>
    </Row>
    <Row>
      <Col md={6}><MaybeTechOnboarding /></Col>
      <Col md={6}><YotpoOnboarding /></Col>
    </Row>
    <Row>
      <Col md={6}><Toast /></Col>
    </Row>
  </Container>
);

export default ExamplePage;
