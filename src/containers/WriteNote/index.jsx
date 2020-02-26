import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';

function handleClick() {
  console.log(handleClick);
  (window.Appcues.track('Note Added Clicked Save'));
  (window.analytics.track('Note added, clicked save'));
  // (window.amplitude.getInstance().logEvent('Saved Note, AMP'));
}

const WriteNote = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">New Note</h3>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="form">
        <ExampleCard />
      </Col>
    </Row>
    <Col md={2}>
      <Link
        className="btn btn-outline-primary account__btn account__btn--small"
        to="/notes"
        onClick={handleClick}
      >
        Save
      </Link>
    </Col>
  </Container>
);

export default WriteNote;
