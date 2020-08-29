import React from "react";
import "./css/StoryReel.css";
import { storiesArr } from "../common/helper";
import Story from "./Story";
function StoryReel() {
  const renderStories = ({ image, profilesrc, title }, index) => (
    <Story image={image} profilesrc={profilesrc} title={title} key={index} />
  );
  return <div className="storyReel">{storiesArr.map(renderStories)}</div>;
}

export default StoryReel;
