import React, { Component } from "react";
import "./profile_style.css";

class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Bio">
          <h3>Md Mahfuzur Rahmna</h3>
          <p>JavaScript Developer and code learning's</p>
        </div>
        <div className="Skills">
          <h3>Skills:</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="Links">
          <h3>Links:</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
