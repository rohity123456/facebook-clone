import React, { useState } from "react";
import "./css/CreatePost.css";
import { Avatar, IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useStateValue } from "../common/StateProvider";
import db from "../common/firebase";
import firebase from "firebase";
import { allowedFileTypes } from "../common/helper";
function CreatePost() {
  const [imgUrl, setImgUrl] = useState("");
  const [input, setInput] = useState("");
  const [{ User }, dispatch] = useStateValue();

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() || imgUrl.trim()) {
      if (!input)
        fetch(imgUrl)
          .then((response) => response.blob())
          .then((images) => {
            console.log(images);
            if (images && allowedFileTypes.includes(images.type))
              db.collection("posts").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilesrc: User.photoURL,
                image: imgUrl,
                title: User.displayName,
              });
          })
          .catch((err) => console.log(err));
      else
        db.collection("posts").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilesrc: User.photoURL,
          image: imgUrl,
          title: User.displayName,
        });
    }
    setImgUrl("");
    setInput("");
  };

  return (
    <div className="createPost">
      <div className="createaPost__top">
        <Avatar src={User.photoURL} />
        <form>
          <input
            type="text"
            className="boxShadow"
            value={input}
            placeholder={`What's on your mind ${User.displayName}?`}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            className="boxShadow"
            value={imgUrl}
            placeholder="Image Url(optional)"
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
        <IconButton className="CreatePostButton" onClick={handleSubmit}>
          <SendRoundedIcon />
        </IconButton>
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
