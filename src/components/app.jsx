import React, { Component } from "react";
import "../index.css";

// Two way  Data Binding in React.

class App extends Component {

    state = {
      name: ''
    }

  handelButtonClick = (event) => {
    //console.log(event.target);
   // console.log("Button Click ..!");
  };

  handleChange = event => {
        //console.log(event.target.value)
        this.setState({name: event.target.value})
  };


  render() {
    return (
      <div className="some">
        <div className="Wrapper">
          <h1 className="Heading"> Event Is React</h1>
          <button className="btn" onClick={this.handelButtonClick}>
            Click Me!
          </button>
          <hr />
          <input
            className="TestField"
            type="text"
            placeholder="Enter some Test"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <hr />
          <br />
          {this.state.name && <h3>Welcome, {this.state.name}</h3>}
        </div>
      </div>
    );
  }
}

export default App;
