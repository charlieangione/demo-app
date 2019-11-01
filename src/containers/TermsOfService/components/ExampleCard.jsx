import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Terms of Service.pdf</h5>
          <h5 className="subhead">Last updated 10/31/19</h5>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
