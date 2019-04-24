import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            Bajra &#169; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
