import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';


function handleClick() {
  console.log(handleClick);
  (window.Appcues.track('Attempted to build a report'));
  (window.analytics.track('Attempted to build report, sgmt'));
  // (window.amplitude.getInstance().logEvent('Attempted to build a report, AMP'));
}


const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col>
        <h3 className="page-title">Build file sharing reports you love!</h3>
      </Col>
      <Col md={2}>
        <Button
          className="btn account__btn"
          // to="/admin-console"
          onClick={handleClick}
        >
          Build Report
        </Button>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
  </Container>
);

export default ExamplePage;
