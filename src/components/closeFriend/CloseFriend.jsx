import React from 'react'
import "./closeFriend.css";

const CloseFriend = ({user}) => {
  const PF= process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="sidebarFriend">
        <img src={ "picuture.jpg" } alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
       </li> 
    </div>
  )
}

export default CloseFriend
