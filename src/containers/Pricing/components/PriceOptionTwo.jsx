import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

function pushEvent() {
  console.log(pushEvent);
  (window.Appcues.track('Clicked Talked to Sales'));
  (window.analytics.track('Clicked talked to Sales, sgmt'));
  // (window.amplitude.getInstance().logEvent('Clicked to talk to sales, AMP'));
}

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
        <Button
          className="account__btn btn"
          // to="/pricing"
          onClick={pushEvent}
        >
          Talk to Sales
        </Button>
      </CardBody>
    </Card>
  </Col>
);

export default PriceOptionTwo;
