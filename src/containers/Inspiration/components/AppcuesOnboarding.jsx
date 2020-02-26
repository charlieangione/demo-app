import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ReactPlayer from 'react-player';

const AppcuesOnboarding = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Appcues</h5>
          <h5 className="subhead">Appcues Onboarding Experience</h5>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://appcues.wistia.com/medias/a07pvjfzc3"
              playing={false}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default AppcuesOnboarding;
