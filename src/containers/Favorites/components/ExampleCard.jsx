import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">My Favorite File</h5>
          <h5 className="subhead">This is a great file!</h5>
        </div>
        <p>Let me tell you why this file is my favorite...</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
