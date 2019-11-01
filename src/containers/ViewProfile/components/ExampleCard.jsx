import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">My picture</h5>
        </div>
        <img
          alt="some value"
          src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"
        />
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
