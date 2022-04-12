import React from "react";
import Cards from "../../components/Cards";
import ProfileHeader from "../../components/Profile/index";
import "./index.css";

function Home() {
  let NAME = sessionStorage.getItem("user_name");

  return (
    <>
      <ProfileHeader />
      <div className="dashboardPage">
        <h1 className="welcome" id="welcome">
          Welcome {NAME}
          {" !"}
        </h1>
        <br></br>
        <br></br>
        <div className="chooseProgram">
          {" "}
          <span>
            Choose a program to track or submit homeowner applications.
          </span>
        </div>

        <Cards />
      </div>
    </>
  );
}

export default Home;
