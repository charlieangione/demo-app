import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col>
        <h3 className="page-title">My Account</h3>
      </Col>
      <Col md={2}>
        <Link
          className="btn btn-outline-primary account__btn account__btn--small"
          to="/invite-team"
          onClick={window.Appcues.track('Clicked to invite user')}
        >
          Invite a team member
        </Link>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
  </Container>
);

export default ExamplePage;
