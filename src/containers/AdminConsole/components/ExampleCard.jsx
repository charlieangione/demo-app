import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Example below shows who you are sharing files with</h5>
          <h5 className="subhead">Example Report</h5>
        </div>
        <img
          alt="some value"
          src="https://cdn.pixabay.com/photo/2017/04/27/15/29/facebook-analytics-2265786_960_720.png"
        />
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
