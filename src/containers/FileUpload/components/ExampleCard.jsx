import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Shared File One</h5>
          <h5 className="subhead">Sharing this file with the sales team</h5>
        </div>
        <p>Technical Selling Playbook</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
