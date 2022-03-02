import React from 'react'
import './index.css'
import Logo from "../../assets/icons/Logo.png";

function index() {
  return (
    <div className="centered">
      <img src={Logo} className="logo" />
      <h3 className="Grid">Grid Services-Installer Intake Portal</h3>
    </div>
  );
}

export default index