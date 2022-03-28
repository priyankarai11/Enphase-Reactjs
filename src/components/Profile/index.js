import React from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import MenuName from "../../components/Menu/ProfileHead";
import "./style.css";

function ProfileHeader({ open, handleClick }) {
  const navigate = useNavigate();

  const backtosignInPage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="centered">
        <div className="logoSection">
          <img onClick={backtosignInPage} src={Logo} className="logo" />
          <h3 onClick={backtosignInPage} className="Grid">
            Grid Services-Installer Intake Portal
          </h3>
        </div>
        <div className="profileSection">
          <img className="profile_img" src={Profile} />
          <MenuName />
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
