import React, { useContext, useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../Post/Post'
import "./feed.css"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
// import { Posts } from '../../dummyData'

const Feed = ({username}) => {
  const [posts ,setPosts]=useState([]);
const {user, accessToken}=useContext(AuthContext)
useEffect(()=>{

  if(username){
    axios.get("http://localhost:8800/api/posts/profile/"+username)
.then((res)=>{setPosts(res.data); console.log(res.data,"hello")}).catch((err)=>{
  console.log(err)
})
  }
else {
  
  
  
  console.log("useeffect else to get posts")
  // http://localhost:4000/v1/posts?page=1&limit=10
  // axios.get( "http://localhost:8800/api/posts/timeline/"+user._id)
  // axios.get( "http://localhost:4000/v1/posts?page=1&limit=10")

  
  axios.get("http://localhost:4000/v1/posts?page=1&limit=10", { headers : {"Authorization" : `Bearer ${accessToken}`} })
.then((res)=>{
  console.log("post " , res.data);
  setPosts(res.data.items.sort((p1, p2)=>{
  return new Date(p2.createdAt) - new Date (p1.createdAt)
})); console.log(res.data,"hello")}).catch((err)=>{
  console.log(err)
})

}
},[username,user._id])
console.log(posts);
  return (
    <div className='feed'>
      <div className="feedWrapper">
     {/* {username===user.username && <Share/>}
      */}
      <Share/>
       {posts.map((p)=>(
        <Post key={p.id} post=
        {p} />
       ))}
      


      </div>
    </div>
  )
}

export default Feed
