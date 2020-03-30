import React from "react"

class SearchBox extends React.Component{
  state = {
    term:"",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }



  render(){
    return(
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <label>Video Search</label>
          <input type="text" value={this.state.term} onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBox;
