import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Outdated NDA</h5>
          <h5 className="subhead">Last updated 4/1/19</h5>
        </div>
        <p>IMPORTANT: No longer use this version of the NDA</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
