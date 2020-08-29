import React from "react";
import "./css/Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { getPosts, storiesArr } from "../common/helper";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <CreatePost />
      {getPosts(storiesArr).map(
        ({ profilesrc, imageUrl, username, timestamp, message }) => (
          <Post
            profilesrc={profilesrc}
            imageUrl={imageUrl}
            username={username}
            timestamp={timestamp}
            message={message}
          />
        )
      )}
    </div>
  );
}

export default Feed;
