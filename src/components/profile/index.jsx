import React, { Component } from "react";
import "./profile_style.css";

import Bio from "./Bio";
import Skills from "./skills";
import Links from "./Links";

class Profile extends Component {
  me ={
    name:"Md Mahfuzr Rahman",
    title: "Backend Fucus JavaScript Developer, Entrepreneur.",
    skillA: 'Java',
    skillB: 'Python',
    skillC: 'NodeJs'
  }
  render() {
    //console.log('Profile -', this.props)
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links />
      </div>
    );
  }
}

export default Profile;
