import React from "react";
import homePic from "../images/AssetHome.png"
import "./css-styling/Home.css"
const Home = ()=>{
    return(
        <div className="image-container">
            <img src={homePic} alt="Home page image"></img>
        </div>
    )
}
export default Home;