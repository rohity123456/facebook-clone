import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { getPosts, storiesArr } from "../common/helper";
import db from "../common/firebase";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );

    return unsubscribe;
  }, []);
  console.log("POSTS", posts);
  return (
    <div className="feed">
      <StoryReel />
      <CreatePost />
      {posts?.map(
        ({ id, data: { profilesrc, image, title, timestamp, message } }) => (
          <Post
            key={id}
            profilesrc={profilesrc}
            imageUrl={image}
            username={title}
            timestamp={timestamp}
            message={message}
          />
        )
      )}
    </div>
  );
}

export default Feed;
