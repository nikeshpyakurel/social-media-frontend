import "./conversation.css";
import React from "react";

const Conversation = () => {
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img
        src="https://nikeshpyakurel.netlify.app/static/media/nikesh.7992d103d1dbe367c9f0.png"
        className="conversationImg"
        alt=""
      />
      <span className="conversationName">Nikesh Pyakurel</span>
    </div>
  );
};

export default Conversation;
