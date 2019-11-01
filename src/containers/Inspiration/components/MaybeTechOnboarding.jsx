import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Player } from 'video-react';
// import 'node_modules/video-react/dist/video-react.css';

const MaybeTechOnboarding = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">MaybeTech</h5>
          <h5 className="subhead">New user onboarding</h5>
          <link rel="stylesheet" href="/css/video-react.css" />
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default MaybeTechOnboarding;
