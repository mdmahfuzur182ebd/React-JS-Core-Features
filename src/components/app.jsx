import React, { Component } from "react";
import "../index.css";

//Our First Event Handler-- event mean object -- event Name and function

class App extends Component {
  handelButtonClick = (event) => {
    //console.log(event.target);
    console.log("Button Click ..!");
  };

  handleChange = event => {
        console.log(event.target.value)
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
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
