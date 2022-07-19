import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import MenuName from "../../components/Menu/ProfileHead";
import { NAME, NAME1 } from "../sessionStorage/index";
import "./style.css";

function ProfileHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

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
          <img className="profile_img" src={Profile} onClick={handleClick} />
          <span className="user_name" onClick={handleClick}>
            Hi {NAME} {NAME1}
          </span>
          <MenuName
            handleClick={handleClick}
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
