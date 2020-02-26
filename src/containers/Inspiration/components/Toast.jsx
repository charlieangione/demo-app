import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
// import { Player } from 'video-react';
import ReactPlayer from 'react-player';
// import 'node_modules/video-react/dist/video-react.css';

const YotpoOnboarding = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Toast</h5>
          <h5 className="subhead">Customer Testimonial</h5>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://appcues.wistia.com/medias/e18zspiy86"
              playing={false}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default YotpoOnboarding;
