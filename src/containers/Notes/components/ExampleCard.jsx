import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">To do</h5>
          <h5 className="subhead">10/21/19</h5>
        </div>
        <li>Take call for Jonathan</li>
        <li>Meet with CS team</li>
        <li>Build demo app for Frida</li>
        <li>Gather sales feedback</li>
        <li>Respond to recent support ticket</li>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
