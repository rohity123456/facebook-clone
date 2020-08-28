import React from "react";
import "./css/Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profilesrc, title }) {
  return (
    <div className="story">
      <Avatar src={profilesrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
