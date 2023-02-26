import React from "react";
import { Banner, Navbar } from "./components";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { ChatPage } from "./Pages";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
