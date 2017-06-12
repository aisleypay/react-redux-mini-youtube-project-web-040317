import React, { Component } from 'react';

const VideoPlayer = ({ video }) => {
  if(!video) {
    return <div><h1>Search for a Video!</h1></div>
  }

  return (
    <div className=" col col-md-6 offset-md-2">
      <div className="video-detail video embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`//www.youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoPlayer
