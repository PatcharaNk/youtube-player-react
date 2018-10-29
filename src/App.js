import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'
import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyAj81kM1a0uUZCjtjS8E9L8RQtR1C9Y6aY"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('home')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data
      })
    })


  }


  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <div className="video-row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selected => this.setState({ selectedVideo: selected })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
