import React from "react";
import "./ProfilePage.css";
import Footer from "./Footer";


const ProfilePage = () => {
    return (
        <div className="body">
            <img className="ProfilePagePhoto" src="/icons/ProfilePagePhoto.jpeg"></img>
            <h2>Joshua Mahabir</h2>
            <h3>@JoshFVO</h3>
            <br></br>
            <div className="ProfileInfo">
            <p><img className="EmailLogo" src="/icons/EmailLogo.png"></img>JoshuaMahabir2024@u.northwestern.edu</p>
            <p><img className="EmailLogo" src="/icons/PhoneLogo.png"/>718-749-6412</p>
            <p><img className="EmailLogo" src="/icons/PronounLogo.png"/>He/Him</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProfilePage