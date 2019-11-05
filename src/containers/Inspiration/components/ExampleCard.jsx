import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Player } from 'video-react';
// import 'node_modules/video-react/dist/video-react.css';

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">IBM Cognos</h5>
          <h5 className="subhead">New user onboarding</h5>
          <link rel="stylesheet" href="/css/video-react.css" />
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://fast.wistia.com/embed/medias/ieykgil8u7.jsonp"
          />
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
