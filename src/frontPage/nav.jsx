import React, { Component } from "react";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="navbar-qs">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#">
            QuickSilver
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="nav-link" href="#">
              Contact Us
            </a>
          </div>
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
              <button type="button" class="btn btn-dark">
                Contact Us
              </button>
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
