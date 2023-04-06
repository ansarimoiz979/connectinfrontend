
import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Feed from '../../components/Feeds/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./home.css"

const Home = ()=>{
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar />
          <Feed/>
          <Rightbar />
        </div>
      </>
    )
}

export default Home