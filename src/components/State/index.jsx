import React, { Component } from "react";


class App extends Component {
    
//     //1st way to state property old style
//   constructor(props) {
//     super(props);
//     this.count = 5;
//   }
    // count = 0  other way
     count = 0

  render() {
   // console.log(this.count)
    return (
      <div>
        <h1>Why do we need state</h1>
        <h2>Count: {this.count}</h2>
        <button onClick={()=>{
            this.count++;
            console.log('clicked....', this.count)
        }}>
            Increment</button>
      </div>
    );
  }
}

export default App;
