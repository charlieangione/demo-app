import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ExampleCard = () => (
  <Col>
    <Card>
      <CardBody to="/recents">
        <div className="card__title">
          <Link className="bold-text" to="/my-documents">My Files</Link>
          <h5 className="subhead">Last updated 10/16/19</h5>
        </div>
      </CardBody>
    </Card>
  </Col>


);


export default ExampleCard;

//         <Button color="primary" to="/inspiration">Upload a file</Button>
