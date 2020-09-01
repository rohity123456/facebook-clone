import React, { useState } from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./css/RightSideBar.css";
import { RandomContacts } from "../common/helper";
import { Avatar, IconButton } from "@material-ui/core";
function RightSideBar() {
  return (
    <div className="RightSideBar scroll">
      <div className="RightSidebar__top">
        <h4>Contacts</h4>
        <div className="RightSideBar__icons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>

      {RandomContacts.map((contact, index) => {
        return (
          <div className="RightSidebar__contact" key={index}>
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${Math.ceil(
                Math.random() * 10000
              )}.svg`}
            />
            <h4>{contact}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default RightSideBar;
