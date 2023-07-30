import React, { Component } from "react";
import "../index.css";

// Text Field Blur and Focus Events in React .

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

  handleFocus = () =>{
    console.log('I am Focus Event')
  }

  handleBlur= () =>{
     if(!this.state.name){
       alert('Pleases Enter Your Name')
     }
     console.log('I am blur Event')
  }


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
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}

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
