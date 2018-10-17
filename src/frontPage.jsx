import React from "react";
import Nav from "./frontPage/nav";
import Coverpage from "./frontPage/coverpage/coverpage";
import Footer from "./frontPage/footer/footer";

const FrontPage = () => (
  <div className="main-page">
    <Nav />
    <Coverpage />
    <Footer />
  </div>
);
export default FrontPage;
