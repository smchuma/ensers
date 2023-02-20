import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">logo</div>
      <Flex gap={2} className="nav-links">
        <div className="links">
          <li>How it works</li>
          <li>Features</li>
          <li>Playground</li>
        </div>
        <div className="btn">
          <button>Get Started</button>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
