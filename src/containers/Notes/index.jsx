import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';
import SecondNote from './components/SecondNote';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col>
        <h3 className="page-title">Notes</h3>
      </Col>
      <Col md={2}>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/new-note">New Note</Link>
      </Col>
    </Row>
    <Row>
      <Col md={4}><ExampleCard /></Col>
      <Col md={4}><SecondNote /></Col>
    </Row>
  </Container>
);

export default ExamplePage;
