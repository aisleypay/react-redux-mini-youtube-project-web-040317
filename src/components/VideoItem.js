import React, { Component } from 'react';

class VideoItem extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleVideoClick(this.props.video)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="list-group-item">
        <div className="video-list-media">
          <img className="media-object" src={this.props.video.snippet.thumbnails.medium.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{this.props.video.snippet.title}</div>
        </div>
      </div>
    )
  }
}

export default VideoItem;
