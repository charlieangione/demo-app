import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ReactPlayer from 'react-player';

const AcceloOnboarding = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Accelo</h5>
          <h5 className="subhead">Using Appcues Checklist</h5>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://appcues.wistia.com/medias/eo7hqn2wj1"
              playing={false}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default AcceloOnboarding;
