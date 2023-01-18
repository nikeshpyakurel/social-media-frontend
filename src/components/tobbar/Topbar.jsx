import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
const Topbar = () => {
  const PE = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="tobarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">DP Media</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <input placeholder="Search ..." className="searchInput" />
          <Search className="searchIcon" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topLink">Homepage</span>
          <span className="topLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person />
            <span className="iconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Chat />
            <span className="iconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Notifications />
            <span className="iconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PE + user.profilePicture
                : PE + "/person/1.jpg"
            }
            alt=""
            className="topbarProfile"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
