import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoClick }) => {
  if (videos.length === 0) {
    return <div>Loading....</div>
  } else {
    return (
      <div className="col col-md-3">
        {videos.map((video) => {
          return <VideoItem key={video.etag} video={video} handleVideoClick={handleVideoClick} />
        })}
      </div>
    )

  }



}

export default VideoList
