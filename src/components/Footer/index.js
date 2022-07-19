import React from 'react'
import './index.css'
import UserIcon from "../../assets/icons/logoEnphase.png";

function index() {
  return (
    <div className="footer_part">
      <img src={UserIcon} className="logo_enphase" />
      <h3 className="copyright">
        ©2008-2022 Enphase Energy Inc. All rights reserved.{" "}
        <a
          href="https://www4.enphase.com/en-us/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy{" "}
        </a>
        |{" "}
        <a
          href="https://www4.enphase.com/en-us/legal/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
      </h3>
    </div>
  );
}

export default index