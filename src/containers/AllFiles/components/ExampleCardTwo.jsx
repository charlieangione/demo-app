import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ExampleCardTwo = () => (
  <Col>
    <Card>
      <CardBody>
        <div className="card__title">
          <Link className="bold-text" to="/notes">My Notes</Link>
          <h5 className="subhead">Last note added 10/16/19</h5>
        </div>
      </CardBody>
    </Card>
  </Col>


);


export default ExampleCardTwo;

//         <Button color="primary" to="/inspiration">Upload a file</Button>
