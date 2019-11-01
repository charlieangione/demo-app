import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Request for Proposal</h5>
          <h5 className="subhead">Last updated 10/22/19</h5>
        </div>
        <p>Appcues RFP.xls</p>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
