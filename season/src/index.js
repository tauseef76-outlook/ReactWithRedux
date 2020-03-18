import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {lat:null, errorMessage: ""};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState ({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({errorMessage: err.message})
      }
    );

  }
  //=============render(): Only render/display work================//
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>
    }
    else if (!this.state.lat && !this.state.errorMessage) {
      return (<div>Loading Data.....</div>);
    }
    else{
      return(<div>Latitude: {this.state.lat}</div>);
    }
  };
}


ReactDom.render(<App />, document.querySelector("#root"));
