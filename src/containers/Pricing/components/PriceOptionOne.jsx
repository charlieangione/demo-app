import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

const PriceOptionOne = () => (
  <Col>
    <Card>
      <CardBody>
        <div className="card__title">
          <h1 className="bold-text">Professional</h1>
          <h3>$5 / month</h3>
          <li>5GB storage</li>
          <li>Unlimited notes</li>
          <li>Zapier integrations</li>
        </div>
        <Button
          className="btn account__btn"
          // to="/pricing"
          // onClick={window.Appcues.track('Clicked Buy Now')}
        >
          Buy Now
        </Button>
      </CardBody>
    </Card>
  </Col>
);

export default PriceOptionOne;
