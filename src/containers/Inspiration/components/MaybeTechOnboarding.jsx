import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
// import { Player } from 'video-react';
// import 'node_modules/video-react/dist/video-react.css';
import ReactPlayer from 'react-player';

const MaybeTechOnboarding = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">MaybeTech</h5>
          <h5 className="subhead">New user onboarding</h5>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://appcues.wistia.com/medias/ieykgil8u7"
              playing={false}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default MaybeTechOnboarding;
