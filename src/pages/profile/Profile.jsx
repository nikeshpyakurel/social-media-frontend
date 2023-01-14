import React from "react";
import "./profile.css";
import Topbar from "../../components/tobbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/newfeed/Feed";
import Rightbar from "../../components/rightbar/RightBar";
const Profile = () => {
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
                src="assets/post/1.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Nikesh Pyakurel</h4>
              <span className="profileInfoDesc">
                Work hard to turn your signature into autograhs 😎😎
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="prayash" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
