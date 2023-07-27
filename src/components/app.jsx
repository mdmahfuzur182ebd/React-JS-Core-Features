import React, { Component } from "react";
import "../index.css";

import Profile from "./profile";
//import Skills from "./profile/skills";
import MyProps from "./Props/index";
import Bio from "./profile/Bio";
import Skills from "./profile/skills";

class App extends Component {
  render() {
    return (
      <div className="some">
        <Profile />
        <Bio name="SomeOne Developer " title="Java Developer" />

        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>List of Programmers</h3>
          <p>Mr. X</p>
          <Skills skillA="Python" skillB=
          "Data Science" skillC="NLP"
          />
          <p>Mr. Y</p>
          <Skills skillA="NodeJs" skillB="ExpressJs" skillC="MongoDb"/>
          <MyProps name="Md Mahfuzur Rahman" />
          <MyProps name="Something Do!" />
        </div>
      </div>
    );
  }
}

export default App;
//custom component taken attribute are call props
