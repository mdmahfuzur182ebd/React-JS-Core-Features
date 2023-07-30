import React, { Component } from "react";
import "../index.css";

//Our First Event Handler-- event mean object -- event Name and function

class App extends Component {

  handelButtonClick = (event) => {
    console.log(event);
    console.log('Button Click ..!')
  };

  render() {
    return (
      <div className="some">
        <div className="class Wrapper">
          <h1 className=""> Event Is React</h1>
          <button className="btn" onClick={this.handelButtonClick}>
            Click Me!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
