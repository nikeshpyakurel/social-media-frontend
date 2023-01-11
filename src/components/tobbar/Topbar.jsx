import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
const Topbar = () => {
  return (
    <div className="tobarContainer">
      <div className="topbarLeft">
        <span className="logo">DP Media</span>
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
        <img
          src="https://www.digitalpravidhi.com/img/niku.png"
          alt=""
          className="topbarProfile"
        />
      </div>
    </div>
  );
};

export default Topbar;
