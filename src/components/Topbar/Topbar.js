import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dropDownProfile from "../dropDownProfile/dropDownProfile";
export default function Topbar() {
    const [ search , setSearch ] = useState("")
    const [ showProfileDropDown , setShowProfileDropDown ] = useState(false) 
    useEffect(()=>{
        if(search != "")
        {
        axios.get(`http://localhost:4000/v1/user/search-user?page=1&limit=200&search=${search}`).then((res)=>{
        //@pending show user list
        console.log("search user response" ,  res)
        }).catch((err)=>{
            console.log("err", err);
        })
    }
    }, [ search ])


    // const handleSearch = ()=>{
    //     axios.get(`http://localhost:4000/v1/user/search-user?page=1&limit=200&search=${search}`).then((res)=>{
    //     //@pending show user list
    //     console.log("search user response" ,  res)
    //     }).catch((err)=>{
    //         console.log("err", err);
    //     })
    // }
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
               {/* <Link to="/" style={{textDecoration:"none"}}> */}
               <span className="logo">Connect-In</span>
               {/*</Link> */}
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                        value={search}
                        onChange={(e)=>{  setSearch(e.target.value) }}
                    />
                    {/* <div className="topbarIconItem">
                        <Search onChange={()=>{ handleSearch() }}/>
                    </div> */}
                    
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                {/* for homepage */}
                <div className="topbarIconItem">
                        <HomeOutlined />
                        {/* <span className="topbarIconBadge">1</span> */}
                    </div>
                    {/* for network or follower and following */}
                    <div className="topbarIconItem">
                        <PeopleAltOutlined />
                        {/* <span className="topbarIconBadge">1</span> */}
                    </div>
                    {/* for job */}
                    <div className="topbarIconItem">
                        <WorkOutlineOutlined />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    {/* my profile dropdonw */}
                    <div className="topbarIconItem">
                        <AccountCircleTwoTone />
                        <span className="topbarIconBadge">2</span>
                        { showProfileDropDown &&  <DropDownProfile/> }
                    </div>

                    
                </div>
            </div>
            
        </div>
    );
}
