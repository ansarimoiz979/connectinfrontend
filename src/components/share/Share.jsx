import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
// import { Navigate } from 'react-router-dom';
import { useNavigate} from "react-router-dom"


export default function Share() {
  const Navigate=useNavigate();

  const PF= process.env.REACT_APP_PUBLIC_FOLDER;

  const {user}=useContext(AuthContext)
  const desc= useRef();

  const [file , setFile]= useState(null);
  

const submitHandler = async (e) => {
  e.preventDefault();
  const newPost = {
    userId: user._id,
    desc: desc.current.value,
  };
  if (file) {
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name", fileName);
    data.append("file", file);
    newPost.img = fileName;
    console.log(newPost);
    try {
      await axios.post("http://localhost:8800/api/upload", data);
    } catch (err) {
      console.log(err, "error 1");
    }
  }
  try { 
    await axios.post("http://localhost:8800/api/posts", newPost);
    
  Navigate(`/profile/${user.username}`)

   
  } catch (err) {
    console.log(err, "error 2");

  }
};
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePictue ? PF+ user.profilePictue: PF +"person/noAvatar.png"} alt="" />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input style={{display:"none"}} type="file" id="file" accept=".png , .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])}></input>
                </label>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}


