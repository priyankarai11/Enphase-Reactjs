import React from "react";
import "./index.css";
import Logo from "../../assets/icons/Logo.png";
import Profile from "../../assets/icons/profile.svg";
import Cards from "../../components/Cards";

const backtosignInPage = () => {
  window.location.href = "/";
};

function Home() {
  let name = sessionStorage.getItem("user_name");
  // let role = sessionStorage.getItem("roles");
  return (
    <>
      <div className="centered">
        <img onClick={backtosignInPage} src={Logo} className="logo" />
        <label className="profileName">Hi {name}</label>
        <img className="profile_img" src={Profile} />

        <h3 onClick={backtosignInPage} className="Grid">
          Grid Services-Installer Intake Portal
        </h3>
      </div>

      <div className="dashboardPage">
        <h1 className="welcome" id="welcome">
          Welcome {name}
          {" !"}
        </h1>
        <br></br>
        <br></br>
        <span>Choose a program to track or submit homeowner applications.</span>

        <Cards />
      </div>
    </>
  );
}

export default Home;
