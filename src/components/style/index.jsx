import React, { Component } from "react";
import './app.css'

import Button from "./button";
import BoxA from "./box";
import BoxB from "./box_b";

const myHeader = {
     color: 'blue',
     fontFamily: 'Arial',
     fontSize: '36px'
}

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={myHeader}>How to Style React App</h1>
        <h1
          style={{
            color: "green",
            fontFamily: "Arial",
            fontSize: "36px",
          }}
        >
          Another inline style{" "}
        </h1>
        <Button>Click Me!</Button>
        <BoxA />
        <BoxB />
      </div>
    );
  }
}

export default App;

//inline style