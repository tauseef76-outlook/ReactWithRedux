import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component{
  state = {images: []};
  //============================API call=======================//
 onSearchSubmit = async(term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization: "Client-ID TeSXHdHjUjJc91c_eo1rUdZsshySm2V_XfqVgA80cOw"
      },
      params: {query: term}
    });

  this.setState({images: response.data.results});
}
  //========================listing images========================//

  render(){
  return(
  <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList image={this.state.images} />

  </div>
   );
  }
}

export default App;
