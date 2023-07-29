import React, { Component } from "react";
import "../index.css";

class Child extends Component {
  render() {
    this.props.func(this);
    return (
      <div>
        <h1>I am child</h1>
      </div>
    );
  }
}

class App extends Component {
  getContext(context) {
    console.log(context);
  }

  render() {
    this.getContext(this);
    return (
      <div className="some">
        <h1>Pass Function as Props</h1>
        <Child func={this.getContext} />
      </div>
    );
  }
}

export default App;

//custom component taken attribute are call props
// Pass function As props
//p to child
