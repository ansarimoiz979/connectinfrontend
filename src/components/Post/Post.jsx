import "./post.css"
import { MoreVert } from "@material-ui/icons"
// import { Users } from "../../dummyData"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {format} from "timeago.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Post = ({post}) => {

    const { user:currentUser , accessToken}= useContext(AuthContext);
    const [user, setuser]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
        .then((res)=>{setuser(res.data);   console.log(res,"users data")}).catch((err)=>{
          console.log(err)
        })
        
        },[])
        useEffect(()=>{
            // setliked(post.likes.includes(currentUser._id))
        },[currentUser._id,post.likes])

    const PF= process.env.REACT_APP_PUBLIC_FOLDER;

//   const kk=  Users.filter((u)=>u.id==post.userId)
//   console.log(kk,"hello kk data");
// const [like, setlike]=useState(post.likes.length)
const [liked, setliked]=useState(false)


const handleLike=(postId)=>{
    try {
        console.log("access token" , accessToken);
        axios.post(`http://localhost:4000/v1/posts/like/${ postId }`, {},{ headers : {"Authorization" : `Bearer ${accessToken}`} }).then(res=>{console.log("res",res.data);}).catch((err)=>{console.log("err",err);})
    } catch (error) {}
    // setlike(liked? like-1:like+1)
    // setliked(!liked)
}
    return (
        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert />
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
                    <img src={PF+post.img} className="postImg" />


                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} onClick={()=>handleLike(post?.id)} className="likeIcon" />
                        <img src={`${PF}heart.png`}  onClick={()=>handleLike(post?.id)} className="likeIcon" />
                        {/* <span className="postlikeCounter">{like}  people like it</span> */}

                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
