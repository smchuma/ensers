import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="images/logo.png"
            alt="logo"
            style={{
              width: "150px",
            }}
          />
        </Link>
      </div>
      <Flex gap={2} className="nav-links">
        <div className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>How it works</li>
          <li>Features</li>
          <li>Playground</li>
        </div>
        <button>Get Started</button>
      </Flex>
    </div>
  );
};

export default Navbar;
