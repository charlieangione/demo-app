import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Account 53</h5>
          <h5 className="subhead">Users & Teams</h5>
        </div>
        <li>Charlie Angione</li>
        <li>Kerri Washington</li>
        <li>Hank Mooney</li>
        <img
          alt="some value"
          src="https://cdn.pixabay.com/photo/2015/08/08/20/44/account-880780_960_720.png"
        />
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
