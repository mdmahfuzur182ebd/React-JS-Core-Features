import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Why do we need state</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            //this.count++;
            this.setState({count: this.state.count + 1})
            console.log("clicked....", this.state.count);
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
