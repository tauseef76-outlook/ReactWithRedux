import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

  //alternate way to declare state... no need to declare constructor
  state = {lat: null, errorMessage:""};

  /*
  //==============constructor()=================//
  constructor(props){
    super(props);
    this.state = {lat:null, errorMessage: ""};
  }
*/
//=================componentDidMount()=======================//
  componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState ({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

//==========================helper()===========================//
renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>
    }
    else if (!this.state.lat && !this.state.errorMessage) {
      return <Spinner />
    }
    else{
      return(<div><SeasonDisplay lat={this.state.lat} /></div>);
    }
  }
  //=============render(): Only render/display work================//
  render(){
    return(
      <div className = "border-red">
        {this.renderContent()}
      </div>
    );
  };
}


ReactDom.render(<App />, document.querySelector("#root"));
