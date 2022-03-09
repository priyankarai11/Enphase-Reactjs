import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/HomePage/index.js";
import LoginPage from "../../pages/LoginPage/index";
import BatteryProgram from "../../pages/BatteryProgram/index"
import ApplicationIdTracker from "../../pages/ApplicationIdTracker/index"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/application-tracker" element={<BatteryProgram />} />
        <Route
          path="/application-Id-tracker"
          element={<ApplicationIdTracker />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
