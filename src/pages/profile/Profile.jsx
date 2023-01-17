import React, { useState, useEffect } from "react";
import "./profile.css";
import Topbar from "../../components/tobbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/newfeed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
import axios from "axios";
import { useParams } from "react-router";
const Profile = () => {
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PE + "/post/1.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PE + "/person/1.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4
                className="profileInfoName"
                style={{ textTransform: "capitalize" }}
              >
                {user.username}
              </h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
