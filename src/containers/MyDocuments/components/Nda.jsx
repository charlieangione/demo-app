import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const NonDisclosure = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Non-disclosure Agreement</h5>
          <h5 className="subhead">Last updated 10/24/19</h5>
        </div>
        <p>Appcues NDA.xls</p>
      </CardBody>
    </Card>
  </Col>
);

export default NonDisclosure;
