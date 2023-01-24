import "./message.css";
import React from "react";

const Message = ({ own }) => {
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">K xa Hau Sir</p>
      </div>
      <div className="messageBottom">1 day ago</div>
    </div>
  );
};

export default Message;
