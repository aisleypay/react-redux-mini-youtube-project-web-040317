import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import _ from 'lodash'

const API_KEY = 'AIzaSyDJBjY4UqxuyyIDEFcAsBCwfyJcoz5Eixw';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'cows',
      videos: [],
      selectedVideo: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleVideoClick = this.handleVideoClick.bind(this)

  }

  componentWillMount() {
    this.fetchVideos("cows")
  }

  fetchVideos(searchTerm){
    // axios.get(`${ROOT_URL}?q=${this.state.searchTerm}&part=snippet&key=${API_KEY}`)
    //   .then(resp => this.setState({
    //     videos: resp.data.items,
    //     selectedVideo: resp.data.items[0]
    //   }))

    this.setState({ searchTerm: searchTerm })

    axios.get(`${ROOT_URL}?q=${this.state.searchTerm}&part=snippet&key=${API_KEY}`)
      .then(resp => this.setState({
        videos: resp.data.items,
        selectedVideo: resp.data.items[0]
      }))
  }

  handleSubmit(searchTerm) {
    this.setState({ searchTerm: searchTerm });
    this.fetchVideos();
  }

  handleVideoClick(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.fetchVideos(term) }, 300);
    return (
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmit} onInputChange={this.handleSubmit} timedChanges={videoSearch}/>
        <div className="row">
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} handleVideoClick={this.handleVideoClick}/>
        </div>
      </div>
    );
  }
}

export default App;
