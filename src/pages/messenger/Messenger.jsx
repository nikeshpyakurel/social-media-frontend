import React, { useContext, useEffect, useState } from "react";
import "./messenger.css";
import Topbar from "../../components/tobbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { SendRounded } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Messenger = () => {
  const [convertations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);
  return (
    <div>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Search for Friends" />
            {convertations.map((c) => {
              <Conversation conversation={c} />;
            })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message /> <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write Somthing..."
              />
              <button className="chatSubmitButton">
                <SendRounded />
              </button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
