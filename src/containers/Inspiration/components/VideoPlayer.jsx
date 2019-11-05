import React from 'react';
// import { Card, CardBody, Col } from 'reactstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = () => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      width="100%"
      height="100%"
      url="https://appcues.wistia.com/medias/r4a5tohxn4"
      playing={false}
    />
  </div>
);

export default VideoPlayer;
