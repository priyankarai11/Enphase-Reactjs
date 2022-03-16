import React from "react";
import ProfileLogo from "../../../assets/icons/profile.svg";
import Logo from "../../../assets/icons/Logo.png";

function Profile() {
  let name = sessionStorage.getItem("user_name");
  return (
    <>
      <div className="headerofPage">
        <div className="centered">
          <img src={Logo} className="logo" />
          <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
        </div>

        <div className="profileSection">
          <label className="profileName">Hi {name}</label>
          <img className="profile_img" src={ProfileLogo} />
        </div>
      </div>
    </>
  );
}

export default Profile;
