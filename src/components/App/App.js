import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage/index.js";
import LoginPage from "../../pages/LoginPage/index";
import BatteryProgram from "../../pages/BatteryProgram/index";
import ApplicationIdTracker from "../../pages/ApplicationIdTracker/index";
import SubmitNewApplication from "../../pages/SubmitNewApplication/index";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/IIC-Dashboard" element={<Home />} />
        <Route path="/APS-Application-Tracker" element={<BatteryProgram />} />
        <Route
          path="/BB-rejected-application-1"
          element={<ApplicationIdTracker />}
        />
        <Route
          path="/APS-submit-new-application-1"
          element={<SubmitNewApplication />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
