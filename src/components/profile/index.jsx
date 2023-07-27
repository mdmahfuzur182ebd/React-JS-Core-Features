import React, { Component } from "react";
import "./profile_style.css";

import Bio from "./Bio";
import Skills from "./skills";
import Links from "./Links";

class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <Bio />
        <Skills />
        <Links />
      </div>
    );
  }
}

export default Profile;
