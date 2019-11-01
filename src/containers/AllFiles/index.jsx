import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';
import ExampleCardTwo from './components/ExampleCardTwo';

const AllFiles = () => (
  <Container className="dashboard">
    <Row>
      <Col>
        <h3 className="page-title">All Files</h3>
      </Col>
      <Col md={2}>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/upload">Upload</Link>
      </Col>
    </Row>
    <Row>
      <Col md={4}><ExampleCard /></Col>
      <Col md={4}><ExampleCardTwo /></Col>
    </Row>
  </Container>
);

export default AllFiles;
