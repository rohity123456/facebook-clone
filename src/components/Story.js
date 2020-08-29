import React from "react";
import "./css/Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profilesrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profilesrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
