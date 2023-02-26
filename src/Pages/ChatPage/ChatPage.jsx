import React from "react";
import { ChatBot, ChatModal } from "../../components";

const ChatPage = () => {
  return (
    <div>
      <h1>Chat Page</h1>
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

export default ChatPage;
