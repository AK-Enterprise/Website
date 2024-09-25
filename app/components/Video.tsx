import React from "react";
import VideoEmbed from "../assets/HeroVid.mp4";
function Video() {
  return (
    <div>
      <video src={VideoEmbed}></video>
    </div>
  );
}

export default Video;
