import React, { Component } from "react";
import "../index.css";


class Child extends Component{
  render(){
    this.props.func(this)
    return(
      <div>
        <h1>I am child</h1>
      </div>
    )
  }
}

const ChildComponent = props =>(
  <div>
      <h3>I am Child Component</h3>
      <p>I don't know what to do </p>
      {props.children}
  </div>
)

class App extends Component {

  getContext(context) {
     console.log(context)
  }

  render() {
    
    return (
      <div className="some">
         <h1>Pass Function as Props</h1>
         {/* <Child func={this.getContext}/> */}
         <ChildComponent>
             <h2>Hello, I am From Parent</h2>
             <h3>I am child of Child Component</h3>
         </ChildComponent>
      </div>
    );
  }
}

export default App;

//custom component taken attribute are call props
// Pass function As props
//p to child
