import React, { useContext, useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../Post/Post'
import "./feed.css"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
// import { Posts } from '../../dummyData'

const Feed = ({username}) => {
  const [posts ,setPosts]=useState([]);
// const {user}=useContext(AuthContext)
// useEffect(()=>{

//   if(username){
//     axios.get("http://localhost:8800/api/posts/profile/"+username)
// .then((res)=>{setPosts(res.data); console.log(res.data,"hello")}).catch((err)=>{
//   console.log(err)
// })
//   }
// else {   axios.get( "http://localhost:8800/api/posts/timeline/"+user._id)
// .then((res)=>{setPosts(res.data.sort((p1, p2)=>{
//   return new Date(p2.createdAt) - new Date (p1.createdAt)
// })); console.log(res.data,"hello")}).catch((err)=>{
//   console.log(err)
// })

// }
// },[username,user._id])
console.log(posts);
  return (
    <div className='feed'>
      <div className="feedWrapper">
     {/* {username===user.username && <Share/>} */}
       {posts.map((p)=>(
        <Post key={p._id} post=
        {p} />
       ))}
      


      </div>
    </div>
  )
}

export default Feed
