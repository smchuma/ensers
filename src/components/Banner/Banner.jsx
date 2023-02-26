import { Link } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="bg">
      <div className="banner">
        <div className="left">
          <div className="content">
            <div className="title">
              <h1>
                Power your customer <br /> service with <br /> Artificial
                intelligence
              </h1>
              <h3>
                For faster and more relevant <br /> customer response
              </h3>
            </div>
            <div className="btn">
              <Link to="/chat">
                <button>Get Started</button>
              </Link>
              <CallMadeIcon
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <img src="images/pp3.png" alt="bg" />
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1677413383">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
