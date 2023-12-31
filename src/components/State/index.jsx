import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    lotofproperties: {},
  };

  render() {
    return (
      <div>
        <h1>Why do we need state</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState(
              (prev) => {
                return {
                  count: prev.count + 1,
                };
              },
              () => {
                console.log("clicked....", this.state.count);
              }
            );
            //this.count++;
            //this.setState({count: this.state.count + 1})
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
