import "./chatOnline.css";
import React from "react";

const ChatOnline = () => {
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://nikeshpyakurel.netlify.app/static/media/nikesh.7992d103d1dbe367c9f0.png"
            className="chatOnlineImg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Nikesh Pyakurel</span>
      </div>
    </div>
  );
};

export default ChatOnline;
