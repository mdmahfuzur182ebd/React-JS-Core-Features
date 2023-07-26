import React, { Component } from "react";

class List extends Component {
  render() {
    // JSX to js code convert
    return React.createElement("div", { className: "App" }, [
      React.createElement("h1", null, "What is JSX?"),
      React.createElement(
        "p",
        null,
        "JSX is Awesome and it's Mean JavaScript Extension"
      ),
    ]);

    // ai syntax reduce.
    // return(
    //     <div className="App">
    //         <h1>What is JSX?</h1>
    //         <p>JSX is Awesome and it"s Mean JavaScript Extension!</p>
    //     </div>
    // )
  }
}

export default List;

// const element = { //jsx obj shape
//     type:'div',
//     props:{
//         className: 'test',
//         title: 'Test me'
//     },
//     children: ['p', 'h1', 'img'] | 'Test' | null
// }