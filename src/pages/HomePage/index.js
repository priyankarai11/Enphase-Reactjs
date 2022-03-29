import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import ProfileHeader from "../../components/Profile/index";
import "./index.css";

function Home() {
  let name = sessionStorage.getItem("user_name");
  // const [items, setItems] = useState([]);
  // const [dataisLoaded, setDataisLoaded] = useState(false);
 

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
