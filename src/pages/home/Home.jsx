import React from 'react'
import Topbar from '../../components/tobbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar';
import RightBar from '../../components/rightbar/RightBar';
import Feed from "../../components/newfeed/Feed";
import "./home.css"
const Home = () => {
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </div>
    )
}

export default Home