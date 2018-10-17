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
const pic = [
  "https://quicksilverteam.com/assets/portfolio/coinmint.png",
  "https://quicksilverteam.com/assets/portfolio/numberz.png",
  "https://quicksilverteam.com/assets/portfolio/st.png"
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
        <div className="port-folio">
          <div className="title">
            <div className="big-title">PORTFOLIO</div>
            <h2>Websites we have built</h2>
          </div>
          <div className="p-flex">
            {pic.map(photo => (
              <div className="p-pic-box">
                <img width="410" height="250" src={photo} />
              </div>
            ))}
          </div>
        </div>
        <div className="technologies">
          <div className="title">
            <div className="big-title">Technologies</div>
            <h2>Things we build</h2>
          </div>
          <div className="t-flex">
            <div className="t-box">
              <div className="icon-box">
                <i class="fa fa-android tech" />
              </div>
              <h5>Mobile Apps</h5>
            </div>
            <div className="t-box">
              <div className="icon-box">
                <i class="fa fa-desktop tech" />
              </div>
              <h5>Web Apps</h5>
            </div>
            <div className="t-box">
              <div className="icon-box">
                <i class="fa fa-globe tech" />
              </div>
              <h5>Scalable Apps</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Coverpage;
