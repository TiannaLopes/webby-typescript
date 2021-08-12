import React, { Component } from "react";
import "./Footer.css";
import Twitter from "./icons/twitter.png";

class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <ul>
            <li>Thanks for visiting</li>
            <li>Creating React Components</li>
            <li>Practicing TypeScript</li>
            <li>And ReactJS</li>
            <li>And CSS of course :p </li>
          </ul>
        </div>
        <div className="box" id="social">
          <ul>
            <li>
              <img src="facebook.png" alt="facebook" />
            </li>
            <li>
              <img src="./icons/gmail.png" alt="gmail" />
            </li>
            <li>
              <img src="./icons/linkedin.png" alt="linkedin" />
            </li>
            <li>
              <img src="./icons/twitter.png" alt="twitter" />
            </li>
            <li>
              <img src="./icons/youtube.png" alt="youtube" />
            </li>
          </ul>
        </div>
        <div className="box">img ****</div>
      </div>
    );
  }
}

export default Footer;
