import React, { Component } from "react";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="navbar-qs">
        <nav className="navbar fixed-top navbar-light ">
          <span className="navbar-brand mb-0 h1 logo">QuickSilver</span>
          <span className="navbar-brand mb-0 h1">Contact Us</span>
        </nav>
        <div className="header">
          <div className="header-flex">
            <div className="header-word">
              <h1>
                WE MAKE <span>WEBSITES</span> IDEAS COME TRUE
              </h1>
              <p>
                Have a business idea? and looking for a trusted developer. Let
                us help you.
              </p>
            </div>
            <div className="header-img">
              <div className="h-icons">
                <img
                  className="h-pic1"
                  src="https://quicksilverteam.com/assets/uploads/2018/03/banner-icons-layer.png"
                />
              </div>
              <div className="h-mobile">
                <img
                  className="h-pic2"
                  src="https://quicksilverteam.com/assets/uploads/2018/03/mobile.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
