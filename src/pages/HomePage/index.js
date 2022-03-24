import React from "react";
import Cards from "../../components/Cards";
import ProfileHeader from "../../components/Profile/index";
import "./index.css";

function Home() {
  let name = sessionStorage.getItem("user_name");
  return (
    <>
      <ProfileHeader />
      <div className="dashboardPage">
        <h1 className="welcome" id="welcome">
          Welcome {name}
          {" !"}
        </h1>
        <br></br>
        <br></br>
        <div classNamae="chooseProgram">
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
