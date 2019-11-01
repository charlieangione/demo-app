import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const SecondNote = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Project Feedback</h5>
          <h5 className="subhead">11/1/19</h5>
        </div>
        <li>Use new branding to improve look & feel</li>
        <li>Needs a new logo</li>
        <li>Functionality not up to par with Box</li>
        <li>Very user friendly</li>
        <li>Love the onboarding content</li>
      </CardBody>
    </Card>
  </Col>
);

export default SecondNote;
