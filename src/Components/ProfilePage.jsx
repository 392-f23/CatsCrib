import React from "react";
import "./ProfilePage.css"


const ProfilePage = () => {
    return (
        <div className="body">
            <img className="ProfilePagePhoto" src="public/icons/ProfilePagePhoto.jpeg"></img>
            <h2>Joshua Mahabir</h2>
            <h3>@JoshFVO</h3>
            <br></br>
            <div className="ProfileInfo">
            <p><img className="EmailLogo" src="public/icons/EmailLogo.png"></img>JoshuaMahabir2024@u.northwestern.edu</p>
            <p><img className="EmailLogo" src="public/icons/PhoneLogo.png"/>718-749-6412</p>
            <p><img className="EmailLogo" src="public/icons/PronounLogo.png"/>He/Him</p>
            </div>
        </div>
    )
}

export default ProfilePage