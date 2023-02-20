import React from "react";
import { Banner, Navbar, ChatBot, ChatModal } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Banner />
      <ChatModal>
        <ChatBot
          className="chatBot"
          style={{
            margin: "120px",
          }}
        />
      </ChatModal>
    </div>
  );
};

export default App;
