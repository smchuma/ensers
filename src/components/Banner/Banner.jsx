import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="bg">
      <div className="banner">
        <div className="left">
          <div className="content">
            <div className="title">
              <h1>AI powered customer service</h1>
              <h3>For faster and more relevant customer response</h3>
            </div>
            <div className="btn">
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="images/pp3.png" alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
