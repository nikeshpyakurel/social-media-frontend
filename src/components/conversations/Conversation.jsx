import "./conversation.css";
import React, { useEffect, useState } from "react";

const Conversation = ({ conversation }) => {
  const [user, setUser] = useState(null);
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.member.find((m) => m);
  }, []);
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
