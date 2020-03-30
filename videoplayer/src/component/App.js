import React from "react";
import SearchBox from "./SearchBox";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyC897jh6dNudNQwoanDUjwGGvfVkN8opIQ";

class App extends React.Component{
  state={videos:[], selectedVideo:null};

  onTermSubmit = async (term) =>{
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
      params:{
        part:"snippet",
        maxResults: 5,
        key: KEY,
        q:term
      }

    });
    this.setState({videos:response.data.items});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    return(
      <>
        <div className="ui container">
          <SearchBox onFormSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
