import React, { Component } from "react";
import "./footer.scss";
// import  from "..//";

class Footer extends Component {
  render() {
    return (
      <div className="footer-page">
        <div className="footerPage">
          <div className="f-left">
            <h3>Contact Info</h3>
            <p>
              Office Address: 415, 16th Cross Road, HSR Layout,
              <br /> Bangalore - 560068
            </p>
            <p>Phone: +91-7872685336</p>
            <p>Email: contact@startupurge.com</p>
            <p>
              © Copyright 2018 Quicksilver Technologies Pvt. Ltd.
              <br /> All Rights Reserved
            </p>
          </div>
          <div className="f-right">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="comment">Your Message:</label>
                <textarea
                  className="form-control msg"
                  rows="5"
                  id="comment"
                  name="text"
                />
              </div>
              <button type="button" class="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
