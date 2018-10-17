import React, { Component } from "react";
import "./coverpage.scss";
// import  from "..//";
const msg = [
  {
    img:
      "https://quicksilverteam.com/assets/uploads/2018/03/feature-icon-1.png",
    title: "Code Quality",
    para:
      "We are an experience team of IIT graduates who always look for challenging works"
  },
  {
    img:
      "https://quicksilverteam.com/assets/uploads/2018/03/feature-icon-2.png",
    title: "Design",
    para:
      "Unline most other developers we have design sense too. We recommend you whats trending in the industry."
  },
  {
    img:
      "https://quicksilverteam.com/assets/uploads/2018/03/feature-icon-3.png",
    title: "SEO",
    para: "We know marketing too. Your website come with basic SEO."
  }
];

class Coverpage extends Component {
  render() {
    return (
      <div className="cover-page">
        <div className="title">
          <div className="big-title">FEATURES</div>
          <h2>We Provide you a hasslefree outsourcing experience</h2>
        </div>
        <div className="box">
          {msg.map(items => (
            <div key={items.title} className="card-box">
              <img className="c-pic" src={items.img} />
              <h4 className="c-title">{items.title}</h4>
              <p>{items.para}</p>
            </div>
          ))}
        </div>
        <div className="middle">
          <div className="m-left">
            <div className="big-title">ABOUT US</div>
            <h2>Dedicate yourself to the things that really matter</h2>
            <p>
              We take up the full technical responsibilty of your project with 3
              months additional support. So that you can focus on what you do
              the best.
            </p>
          </div>
          <div className="m-right">
            <img
              className="m-pic"
              src="https://quicksilverteam.com/assets/uploads/2018/03/mobile-2.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Coverpage;
