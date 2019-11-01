import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const PriceOptionTwo = () => (
  <Col>
    <Card>
      <CardBody>
        <div className="card__title">
          <h1 className="bold-text">Enterprise</h1>
          <h3>Contact us for pricing</h3>
          <li>10GB storage</li>
          <li>Unlocks the Admin Console</li>
          <li>API integration</li>
        </div>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/pricing">Talk to Sales</Link>
      </CardBody>
    </Card>
  </Col>
);

export default PriceOptionTwo;
