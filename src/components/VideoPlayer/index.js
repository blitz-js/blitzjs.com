import React from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ReactPlayer from "react-player";
import "./video-player.css";

const VideoPlayer = ({ url }) => {
  if (ExecutionEnvironment.canUseDOM) {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={useBaseUrl(url)}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
  return null;
};

export default VideoPlayer;
