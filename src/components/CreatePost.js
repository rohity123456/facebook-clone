import React, { useState } from "react";
import "./css/CreatePost.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

function CreatePost() {
  const [imgUrl, setImgUrl] = useState("");
  const [input, setInput] = useState("");
  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("YOO");
  };

  return (
    <div className="createPost">
      <div className="createaPost__top">
        <Avatar />
        <form>
          <input
            type="text"
            value={input}
            placeholder="What's on your mind?"
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            value={imgUrl}
            placeholder="Image Url(optional)"
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button type="submit" hidden onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="createaPost__bottom">
        <div className="createaPost__option" style={{ color: "red" }}>
          <VideocamIcon />
          <h3>Live Video</h3>
        </div>
        <div className="createaPost__option" style={{ color: "green" }}>
          <PhotoAlbumIcon />
          <h3>Photo/Video</h3>
        </div>
        <div className="createaPost__option" style={{ color: "orange" }}>
          <InsertEmoticonIcon />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
