import React from "react";
import "./index.css";
import Logo from "../../assets/icons/Logo.png";

function Home() {
  let name = sessionStorage.getItem("user_name");
  let company = sessionStorage.getItem("account_company_name");
  let time = sessionStorage.getItem("account_time_zone");
  let role = sessionStorage.getItem("roles");
  return (
    <>
      <div className="centered">
        <img src={Logo} className="logo" />
        <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
      </div>
      <h1 className="welcome" id="welcome">
        Welcome {name}
        {" ,"}
      </h1>
      <br></br>
      <br></br>
      <ul>
        <table>
          <tbody>
            <tr>
              <th>Name :</th>

              <td>{name}</td>
            </tr>
            <tr>
              <th>Company Name:</th>

              <td>{company}</td>
            </tr>
            <tr>
              <th>Role:</th>

              <td>{role}</td>
            </tr>
            <tr>
              <th>Time:</th>

              <td>{time}</td>
            </tr>
          </tbody>
        </table>
      </ul>
    </>
  );
}

export default Home;
