import React, { Component } from "react";
import "../index.css";

import Profile from "./profile";
//import Skills from "./profile/skills";
import  MyProps from './Props/index'

class App extends Component {
  render() {
    return (
      <div className="some">
        <Profile />
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>List of Programmers</h3>
          {/* <p>Mr. X</p>
          <Skills />
          <p>Mr. Y</p>
          <Skills /> */}
           <MyProps name="Md Mahfuzur Rahman"/>
           <MyProps name="Something Do!"/>
        </div>
      </div>
    );
  }
}


export default App;
//custom component taken attribute are call props